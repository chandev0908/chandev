import React, {Component} from 'react'
import Typed from 'react-typed'

import AOS from 'aos'
import "aos/dist/aos.css"

// Image
import Svg from '../img/shape.svg'
import logo from '../logo.svg'
import html from '../img/html5.png'
import css from '../img/css3.png'
import js from '../img/js.png'
import reactjs from '../img/reactjs.svg'
import redux from '../img/redux.png'
import nodejs from '../img/icons8-nodejs-96.png'

const Home = () => {
    AOS.init()
    class MyComponent extends Component {
        render() {
            return (
                <Typed
                strings={[' Self Taught Developer', 'Web Developer', 'Full Stack Developer']}
                typeSpeed={115}
                backSpeed={70}
                />
            );
        }
    }
    const onClickNavbar = () => {
        const menu = document.querySelector('.menu')
        const toggle = document.querySelector('.fas')
        const main = document.querySelector('.main')
        if (menu.classList.contains('close')) {
            menu.classList.remove('close')
            menu.classList.add('open')
            menu.classList.remove('hover')
        } else {
            menu.classList.add('close')
            menu.classList.remove('open')
            menu.classList.remove('hover')
        }
        if(toggle.classList.contains('rotate-close')){
            // Navbar Icon Rotations
            toggle.classList.remove('rotate-close')
            toggle.classList.add('rotate-open')
        }else{
            // Navbar Icon Rotations
            toggle.classList.add('rotate-close')
            toggle.classList.remove('rotate-open')
        }
        if(main.classList.contains('x-click')){
            main.classList.remove('x-click')
            main.classList.add('clicked')
        }else{
            main.classList.remove('clicked')
            main.classList.add('x-click')
        }
    }
    const onHoverNavBar = () => {
        const menu = document.querySelector('.menu')
            menu.classList.remove('not-hover')
            menu.classList.add('hover')
    }
    const onMouseOutNavbar = () => {
        const menu = document.querySelector('.menu')
            menu.classList.add('not-hover')
            menu.classList.remove('hover')
    }
    
    // ScrollHandler For Animation
    let scrollHandler = () => { document.addEventListener('scroll', function(e) {
        let scrollPosition = 0;
        scrollPosition = window.scrollY;
        const main = document.querySelector('.main')
        const textone = document.querySelector('.first')
        const texttwo = document.querySelector('.second')
        if(scrollPosition > 30){
            main.classList.remove('x-click')
            main.classList.add('clicked')
            textone.classList.remove('not-scrolled1')
            textone.classList.add('text-scrolled1')
            texttwo.classList.remove('not-scrolled2')
            texttwo.classList.add('text-scrolled2')
            
        }else if(scrollPosition < 30){
            main.classList.remove('clicked')
            main.classList.add('x-click')
            textone.classList.remove('text-scrolled1')
            textone.classList.add('not-scrolled1')
            texttwo.classList.remove('text-scrolled2')
            texttwo.classList.add('not-scrolled2')
        }
    });
    }
    scrollHandler()
    // var alternavbar = function(){
    //     var scrollTop =  window.scrollY;
    //     const main = document.querySelector('.main')
	// 	if( scrollTop > 50 ){
	// 		main.classList.remove('x-click')
    //         main.classList.add('clicked')
	// 	}else if (scrollTop < 50){
    //         main.classList.remove('clicked')
    //         main.classList.add('x-click')
	// 	}
	// }
	// alternavbar();
	// window.addEventListener('scroll', alternavbar);
    
    return(
        <div className='home-main' id='h-main'>
            <div className='my-icon-container'>
                Chandev
            </div>
            <div className='popups'>
                <div className='social-icons'>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <div className='s1' >
                <div className='navbar-toggle' onClick={onClickNavbar}  >
                    <i className="fas fa-chevron-circle-down rotate-close" onMouseOut={onMouseOutNavbar} onMouseOver={onHoverNavBar}></i>
                </div>
                <div className='menu close not-hover' >
                    <div className='section-menus'>
                    <a href="//"><h2>{'{ Main }'}</h2></a>
                    <a href="//"><h2>{'{ About Me }'}</h2></a>
                    <a href="//"><h2>{'{ Contact }'}</h2></a>
                    </div>
                </div>
                <div className='main x-click'>
                    <div className='intro'>
                        <div className='text'>
                            <h1>Hi <span>I'm Christian Dalagan</span></h1>
                            <h2> A {<MyComponent/>}</h2>
                        </div>
                    </div>
                    <div className='scroll-anim'>
                        <h3><span><i className="fas fa-arrow-left span-scroll"></i></span>Scroll</h3>
                    </div>
                    <div className='scroll-container'>
                        <h3> <span><i className="fas fa-arrow-left"></i></span>Scroll</h3>
                        <div className='q-info'>
                            <h2 className='first not-scrolled1'>Quick Info About Me</h2>
                            <h4 className='second not-scrolled2'>I'm Christian Dalagan from Philippines currently First Year College in Tarlac State University</h4>
                        </div>
                    </div>
                </div>
                <div className='borders'>
                    <div className='top'>
                        <div className='my-icon'>
                            Chandev
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='text'>
                            <span className='orange'>Christian Dalagan ©2020 </span><span>Made with ReactJs<img src={logo} className='App-logo' alt='react'></img></span>
                        </div>
                    </div>
                    <div className='left'></div>
                    <div className='right'>
                        <div className='social-icons'>
                            <i className="fab fa-github"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Svg} alt='n' className='svg' ></img>
            <div className='s2'>
                <h1 className='ttle'>About</h1>
                <div className='offer-wrapper'>
                    <div className='inside-wrapper'>
                        <div className='offer-card'>
                            <div className='hex-wrap'>
                                <div className='hexagon'>
                                    <i class="fas fa-tachometer-alt"></i>
                                </div>
                            </div>
                            <div className='s-text'>
                                <h1>Optimized</h1>
                                <p>wqrelksdjnfaa masfasf;jk</p>
                            </div>
                        </div>
                        <div className='offer-card'>
                            <div className='hex-wrap'>
                                <div className='hexagon'></div>
                            </div>
                            <div className='s-text'>
                                <h1>Responsive</h1>
                                <p>wqrelksdjnfaa masfasf;jk</p>
                            </div>
                        </div>
                    </div>
                    <div className='inside-wrapper'>
                        <div className='offer-card'>
                            <div className='hex-wrap'>
                                <div className='hexagon'></div>
                            </div>
                            <div className='s-text'>
                                <h1>Fast</h1>
                                <p>wqrelksdjnfaa masfasf;jk</p>
                            </div>
                        </div>
                        <div className='offer-card'>
                            <div className='hex-wrap'>
                                <div className='hexagon'></div>
                            </div>
                            <div className='s-text'>
                                <h1>Quality</h1>
                                <p>wqrelksdjnfaa masfasf;jk</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-container'>
                    <div className='about-info'>
                        <div className='img-container'>
                            <img src='' alt='my-img'/>
                        </div>
                        <div className='text-info'>
                            <h3>I'm Christian Dalagan a Self Taught Developer currently live in Philippines. 
                                I have serious passion when it comes Web Development both Frond End and Backend Development and now I am currently learning backend stuffs</h3>
                        </div>
                    </div>
                    <div className='skillset-container'>
                        <div className='title'>
                            <h2>Dev Skills and Tools</h2>
                        </div>
                        <div className='card-wrapper'>
                            <div className='skill-card'>
                                <img src={html} alt='HTML5' />
                            </div>
                            <div className='skill-card'>
                                <img src={css} alt='HTML5' />
                            </div>
                            <div className='skill-card'>
                                <img src={js} alt='HTML5' />
                            </div>
                            <div className='skill-card'>
                                <img src={reactjs} alt='HTML5' />
                            </div>
                            <div className='skill-card'>
                                <img src={redux} alt='HTML5' />
                            </div>
                            <div className='skill-card'>
                                <img src={nodejs} alt='HTML5' />
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>            
    )
}
export default Home