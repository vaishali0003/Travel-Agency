import React from 'react'
import Navbar from './Navbar'

const Theme = () => {

    const darkMode = () => {
        console.log('dark theme is on')
        document.querySelector('.navBar').classList.add('navBarDark');
        document.querySelector('.logo').classList.add('logoDark');
        document.querySelector('.main').classList.add('mainDark');
        if (document.querySelector('.homeSec2') !== null) {
            document.querySelector('.homeSec2').classList.add('homeSec2Dark');
        }

        let btns = document.querySelectorAll('.btn1');

        if (btns !== null) {
            for (let i of btns) {
                i.classList.add('btn1Dark');
            }
        }

        if (document.querySelector('.journeyInfo') !== null) {
            document.querySelector('.journeyInfo').classList.add('journeyInfoDark');
        }

        let cards = document.querySelectorAll('.card');
        if (cards !== null) {
            for (let i of cards) {
                i.classList.add('cardDark');
            }
        }

        let tSec11 = document.querySelectorAll('.tSec11');
        if (tSec11 !== null) {
            for (let i of tSec11) {
                i.classList.add('tSec11Dark')
            }
        }

        let reviewBox = document.querySelectorAll('.reviewBox');
        if (reviewBox !== null) {
            for (let i of reviewBox) {
                i.classList.add('reviewBoxDark')
            }
        }

        let tSectitle1 = document.querySelectorAll('.tSectitle1');
        if (tSectitle1 !== null) {
            for (let i of tSectitle1) {
                i.classList.add('tSectitle1Dark');
            }
        }

        if (document.querySelector('.footerSection') !== null) {
            document.querySelector('.footerSection').classList.add('footerSectionDark');
        }

        let loca = document.querySelectorAll('.loca');

        // if(loca!=null){
        for (let i of loca) {
            console.log(i);
            i.classList.add('locaDark');
        }
        // }

        if (document.querySelector('.loginBox') !== null) {
            document.querySelector('.loginBox').classList.add('loginBoxDark');
        }

        if (document.querySelector('.nav-1') !== null) {
            document.querySelector('.nav-1').classList.add('nav-1-dark');
        }

        const navListItems = document.querySelectorAll('.nav-list-item');
        if (navListItems !== null) {
            for (let i of navListItems) {
                i.classList.add('nav-list-item-dark')
            }
        }

        const busBoxes = document.querySelectorAll('.busBox1');
        if (busBoxes != null) {
            for (let i of busBoxes) {
                i.classList.add('busBoxDark');
            }
        }

        const busBoxes2 = document.querySelectorAll('.busBox2');
        if (busBoxes2 != null) {
            for (let i of busBoxes2) {
                i.classList.add('busBox2Dark');
            }
        }

        const fIn = document.querySelectorAll('.fIn');
        if (fIn !== null) {
            for (let i of fIn) {
                i.classList.add('fInDark');
            }
        }


        document.getElementById('themeLogo').src = '../images/sun.svg';

        localStorage.setItem('mode', 'darkMode')
    }


    const lightMode = () => {
        console.log('light theme is on')
        document.querySelector('.navBar').classList.remove('navBarDark');
        document.querySelector('.logo').classList.remove('logoDark');
        document.querySelector('.main').classList.remove('mainDark');

        if (document.querySelector('.homeSec2') !== null) {
            document.querySelector('.homeSec2').classList.remove('homeSec2Dark');
        }

        let btns = document.querySelectorAll('.btn1');

        if (btns !== null) {
            for (let i of btns) {
                i.classList.remove('btn1Dark');
            }
        }

        if (document.querySelector('.journeyInfo') !== null) {
            document.querySelector('.journeyInfo').classList.remove('journeyInfoDark');
        }

        let cards = document.querySelectorAll('.card');
        for (let i of cards) {
            i.classList.remove('cardDark');
        }

        if (document.querySelector('.tSec11') !== null) {
            document.querySelector('.tSec11').classList.remove('tSec11Dark');

        }

        let tSec11 = document.querySelectorAll('.tSec11');
        if (tSec11 !== null) {
            for (let i of tSec11) {
                i.classList.remove('tSec11Dark')
            }
        }

        let reviewBox = document.querySelectorAll('.reviewBox');
        if (reviewBox !== null) {
            for (let i of reviewBox) {
                i.classList.remove('reviewBoxDark')
            }
        }


        let tSectitle1 = document.querySelectorAll('.tSectitle1');
        if (tSectitle1 !== null) {
            for (let i of tSectitle1) {
                i.classList.remove('tSectitle1Dark');
            }
        }

        if (document.querySelector('.footerSection') !== null) {
            document.querySelector('.footerSection').classList.remove('footerSectionDark');

        }

        if (document.querySelector('.loginBox') !== null) {
            document.querySelector('.loginBox').classList.remove('loginBoxDark');
        }

        if (document.querySelector('.nav-1') !== null) {
            document.querySelector('.nav-1').classList.remove('nav-1-dark');
        }

        const navListItems = document.querySelectorAll('.nav-list-item');
        if (navListItems !== null) {
            for (let i of navListItems) {
                i.classList.remove('nav-list-item-dark')
            }
        }

        const fIn = document.querySelectorAll('.fIn');
        if (fIn !== null) {
            for (let i of fIn) {
                i.classList.remove('fInDark');
            }
        }

        const busBoxes = document.querySelectorAll('.busBox1');
        if (busBoxes != null) {
            for (let i of busBoxes) {
                i.classList.remove('busBoxDark');
            }
        }

        const busBoxes2 = document.querySelectorAll('.busBox2');
        if (busBoxes2 != null) {
            for (let i of busBoxes2) {
                i.classList.remove('busBox2Dark');
            }
        }
        document.getElementById('themeLogo').src = '../images/moon.svg';

        localStorage.setItem('mode', 'lightMode')
    }

    return (
        <Navbar darkMode={darkMode} lightMode={lightMode} url1="../images/moon.svg" url2="../images/sun.svg" />
    )
}

export default Theme;