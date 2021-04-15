import React from "react";
import { Link } from "react-router-dom";
import { Button } from './Button';
import './Footer.css';


function Footer() {
  return (
    <div className="footer-container">
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Bigger text
        </p>
        <p className='footer-subscription-text'>
          Smaller text
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
          <div className='footer-link-wrapper'>
              <div className='footer-link-items'> 
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>How it doesn't work</Link>
                <Link to='/'>How it may work</Link>
                <Link to='/'>How it shoult't work</Link>
              </div>
              <div className='footer-link-items'> 
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>How it doesn't work</Link>
                <Link to='/'>How it may work</Link>
                <Link to='/'>How it shoult't work</Link>
              </div>
          </div>
          <div className='footer-link-wrapper'>
              <div className='footer-link-items'> 
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>How it doesn't work</Link>
                <Link to='/'>How it may work</Link>
                <Link to='/'>How it shoult't work</Link>
              </div>
              <div className='footer-link-items'> 
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>How it doesn't work</Link>
                <Link to='/'>How it may work</Link>
                <Link to='/'>How it shoult't work</Link>
              </div>
          </div>
      </div>
      <section className='social-media'>
        <div className='socialmedia-wrap'>
            <div className='footer-logo'>
                <Link className='social-logo'>
                    Min Young Lee Dev <i className='fab fa-typo3' />
                </Link>
            </div>
            <small className='website-rights'>Copyrights 2020</small>
            <div className='social-icons'>
                <Link className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'>
                    <i className='fab fa-facebook-f'/>
                </Link>
                <Link className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Facebook'>
                    <i className='fab fa-youtube'/>
                </Link>
                <Link className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Facebook'>
                    <i className='fab fa-twitter'/>
                </Link>
                <Link className='social-icon-link linkedin'
                to='/'
                target='_blank'
                aria-label='Facebook'>
                    <i className='fab fa-linkedin'/>
                </Link>
            </div> 

        </div>
      </section>
    </div>
  );
}

export default Footer;
