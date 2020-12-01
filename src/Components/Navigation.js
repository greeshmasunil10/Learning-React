import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'

//menu
//className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow
//mask
//className="fixed bg-black-t-50 bg-gray-400 top-0 left-0 z-50 w-full h-full"
// onClick={() => setShowMenu(false)}

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    let menu = null
    let menuMask = null
    // if(showMenu){
    menu = 
        <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"> 
        {/* // fixed or absolute */}
            MENU
        </div>
        menuMask =
        <div className="fixed bg-black-t-50 bg-gray-400 top-0 left-0 z-50 w-full h-full"
                onClick={() => setShowMenu(false)}
        >

        </div>
    // }
    // const [show, set] = useState(false)
    const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })

    // return transitions.map(({ item, key, props }) =>
    // item && <animated.div key={key} style={props}>✌️</animated.div>
    // )
    return(
        <nav>
                <span className="text-xl">
                        <FontAwesomeIcon 
                            icon={faBars} 
                            onClick={() => setShowMenu(!showMenu)} 
                            />
                 </span>
                 {
                     maskTransitions.map(({ item, key, props }) =>
                         item && 
                         <animated.div 
                                    key={key} 
                                     style={props}>
                             {menuMask}
                        </animated.div>
                     )
                 }
                 {
                     menuTransitions.map(({ item, key, props }) =>
                         item && 
                         <animated.div 
                                    key={key} 
                                     style={props}>
                             {menu}
                        </animated.div>
                     )
                 }
        </nav>
    )
}

export default Navigation