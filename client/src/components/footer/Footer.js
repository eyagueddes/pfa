import React from "react";
import "./Footer.css";


import { applyMiddleware } from "redux";
function Footer() {
  return (
    <div className="main-footer">
     <div className="test">
   <div className="footer">
     <div className="col-md padd">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Why using the Platform ?</h2>
              <p className="text">
                This platform helps you to share their knowledge.<br/>
                it's  enriched by posts, comments, votes, notifications.<br/>
                People with questions get the answers they need. <br/>
                </p>
            </div>
            </div>
            
            <div className="col-md padd">
            
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <ul className="list-unstyled " >
                <li><i class="greennature-icon fa fa-mobile" style={{fontSize:"12px",color:"#fff"}}></i><a  className="py-2 d-block text"> +216 28 129 764</a></li>
                <li><i class="greennature-icon fa fa-mobile" style={{fontSize:"12px",color:"#fff"}}></i><a  className="py-2 d-block text"> +216 53 607 390</a></li>
                <li><i class="greennature-icon fa fa-envelope-o" style={{fontSize:"12px",color:"#fff"}}></i><a  className="py-2 d-block text"> eyagueddes1@gmail.com</a></li>
                <li><i class="greennature-icon fa fa-envelope-o" style={{fontSize:"12px",color:"#fff"}}></i><a  className="py-2 d-block text"> waelhasnaoui006@gmail.com</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md">
          
             <div className="ftco-footer-widget mb-4" style={{paddingLeft:"132px"}}>
             <h2 className="ftco-heading-2" style={{textAlign:"center"}}>Social</h2><br/>
             <div class="footer-icons">
               <a href="https://www.linkedin.com/in/eya-gueddes-8b90981aa/"><i class="fa fa-linkedin"></i></a><p></p>
               <a href="https://www.linkedin.com/in/wael-hasnaoui-b1a488192/"><i class="fa fa-linkedin"></i></a>

</div>
              </div>
            


          
        
               




               </div>
          </div>

          <div className="col-md-12 text-center">
            <p>
            All rights reserved..© <script>document.write(new Date().getFullYear());</script> 2021 The model is made 
        <i className="icon-heart" aria-hidden="true">
         </i> by <a href="https://colorlib.com" target="_blank">  Wael Hasnaoui & Eya Gueddes</a>
  </p>
          
     </div>
    
        
      </div>
      </div>
      
   );
}

export default Footer;