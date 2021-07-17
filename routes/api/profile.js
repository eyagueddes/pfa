const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const auth = require('../../middleware/auth');
const {check,validationResult} = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User'); 
const Post = require('../../models/Post');
=======
const request = require('request');
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { response } = require('express');
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
//@route Get api/profile/me
//@desc Test users profile 
//@access private

<<<<<<< HEAD
router.get('/me',auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({user : req.user.id}).populate(
            'user',['name','avatar']
        );
        if (!profile){
            return res.status(400).json({msg :'There is no profile for this user'});
        }
        res.json(profile); 
    }catch(err){
        console.error(err.message); 
=======
router.get('/me', auth, async(req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate(
            'user', ['name', 'avatar']
        );
        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
        res.status(500).send('Server Error');
    }
});

<<<<<<< HEAD
//@route Get api/profile/me
//@desc create or update profile
//@access private

router.post('/',[auth,[
    check('status','Status is required').not().isEmpty(),
    check('skills','Skills is required').not().isEmpty()
]
],async(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const {  
        comapny,
=======
//@route Get api/profil
//@desc create or update profile
//@access private

router.post('/', [auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty()
]], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {
        company,
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
        bio,
        website,
        skills,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook,
        status,
        githubusername,
        location
<<<<<<< HEAD
      } = req.body;

    // Build profile object
      const profileFields = {}; 
      profileFields.user = req.user.id; 
      if (comapny) profileFields.comapny = comapny ; 
      if (website) profileFields.website = website ; 
      if (location) profileFields.location = location ; 
      if (bio) profileFields.bio = bio ; 
      if (status) profileFields.status = status ; 
      if (githubusername) profileFields.githubusername = githubusername ; 
      if (skills){
          
          profileFields.skills = skills.split(',').map(skill => skill.trim());
      }

      // Build social object 
      profileFields.social = {}; 
      if (youtube) profileFields.social.youtube = youtube ; 
      if (twitter) profileFields.social.twitter = twitter ; 
      if (facebook) profileFields.social.facebook = facebook ; 
      if (instagram) profileFields.social.instagram = instagram ; 
      
      try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
}
);
=======
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {

        profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    // Build social object 
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;

    try {
        // Using upsert option (creates new doc if no match is found):
        let profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true, upsert: true, setDefaultsOnInsert: true });
        return res.json(profile);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
//@route Get api/profile
//@desc  Get all profile
//@access public

<<<<<<< HEAD
router.get('/',async(req,res) => {
    try {
        const profiles = await Profile.find().populate('user',['name','avatar']);
=======
router.get('/', async(req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route Get api/profile/user:user_id
//@desc  Get profile by user ID
//@access public

<<<<<<< HEAD
router.get('/user/:user_id',async(req,res) => {
    try {
        const profile = await Profile.findOne({user : req.params.user_id}).populate('user',['name','avatar']);
        if (!profile) return res.status(400).json({msg : 'There is no profile for this user'});
=======
router.get('/user/:user_id', async(req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);
        if (!profile) return res.status(400).json({ msg: 'There is no profile for this user' });
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54

        res.json(profile);
    } catch (err) {
        console.error(err.message);
<<<<<<< HEAD
        if(err.kind == 'ObjectId'){
            return res.status(400).json({msg : 'Profile not found'});
=======
        if (err.kind == 'ObjectId') { //exeplme "1" not an objectId 
            return res.status(400).json({ msg: 'Profile not found' });
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
        }
        res.status(500).send('Server Error');
    }
});

//@route Delete api/profile
//@desc  Delete profile ,user & posts
//@access private
<<<<<<< HEAD

router.delete('/',auth,async(req,res) => {
=======
router.delete('/', auth, async(req, res) => {
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
    try {
        // Remove user posts
        // Remove profile
        // Remove user
        await Promise.all([
<<<<<<< HEAD
         // delete posts
          Post.deleteMany({ user: req.user.id }),
         // Remove Profile
          Profile.findOneAndRemove({ user: req.user.id }),
          //Remove user
          User.findOneAndRemove({ _id: req.user.id }),
          
        ]);
    
        res.json({ msg: 'User deleted' });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

//@route Put api/profile/experience
//@desc  Add profile experienece
//@access private

router.put(
    '/experience',
    auth,
    check('title', 'Title is required').notEmpty(),
    check('company', 'Company is required').notEmpty(),
    check('from', 'From date is required and needs to be from the past')
      .notEmpty()
      .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const profile = await Profile.findOne({ user: req.user.id });
  
        profile.experience.unshift(req.body);
  
        await profile.save();
  
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

//@route DELETE api/profile/experience/:exp_id
//@desc  delete experienece from profile
//@access private

router.delete('/experience/:exp_id',auth,async(req,res)=>{
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);
        profile.experience.splice(removeIndex,1);
        await profile.save();
        res.json(profile)
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});


// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
=======
            //  Post.deleteMany({ user: req.user.id }),
            Profile.findOneAndRemove({ user: req.user.id }),
            User.findOneAndRemove({ _id: req.user.id })
        ]);

        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
//@route Put api/profile/experience
//@desc  Add profile experienece
//@access private  

router.put('/experience', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty()
]], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body;

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }
    try {
        const profile = await Profile.findOne({ user: req.user.id }); //we get it from token


        profile.experience.unshift(newExp); //array and the most recent is first 
        await profile.save();
        res.json(profile); //return the whole profile
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/experience/:exp_id', auth, async(req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }); //get profile by user id
        //get the remove index
        const removeIndex = profile.experience //map through the experie nces
            .map(item => item.id)
            .indexOf(req.params.exp_id);

        profile.experience.splice(removeIndex, 1); // we want to take sth out (splice)
        await profile.save();
        res.json(profile);


    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');

    }
});
//@route Put api/profile/education
//@desc  Add profile education
//@access private  

>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
router.put('/education', [auth, [
    check('school', 'School is required').not().isEmpty(),
    check('degree', 'Degree is required').not().isEmpty(),
    check('fieldofstudy', 'Field is required').not().isEmpty(),
    check('from', 'from date is required').not().isEmpty()
]], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = req.body;

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    }
    try {
        const profile = await Profile.findOne({ user: req.user.id }); //we get it from token


<<<<<<< HEAD
        profile.education.unshift(newEdu); 
=======
        profile.education.unshift(newEdu); //array and the most recent is first 
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
        await profile.save();
        res.json(profile); //return the whole profile
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

<<<<<<< HEAD
  
  // @route    DELETE api/profile/education/:edu_id
  // @desc     Delete education from profile
  // @access   Private
  
  router.delete('/education/:edu_id', auth, async(req, res) => {
=======
router.delete('/education/:edu_id', auth, async(req, res) => {
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
    try {
        const profile = await Profile.findOne({ user: req.user.id }); //get profile by user id
        //get the remove index
        const removeIndex = profile.education //map through the experie nces
            .map(item => item.id)
            .indexOf(req.params.edu_id);

        profile.education.splice(removeIndex, 1); // we want to take sth out (splice)
        await profile.save();

        res.json(profile);


    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');

    }
});
<<<<<<< HEAD
  

module.exports = router;


=======
//@route Get api/profile/github/:username
//@desc get user repos from Github
//@access public
router.get('/github/:username', (req, res) => {
    try {
        const option = {
            uri: `https://api.github.com.users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };
        request(this.options, (error, response, body) => {
            if (error) console.error(error);
            if (response.statusCode !== 200) {
                res.status(404).json({ msg: 'No github profile found' });
            }
            res.json(JSON.parse(body));
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');

    }
})

module.exports = router;
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
