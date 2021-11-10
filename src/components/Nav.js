import React from "react";

function Nav(){
    return(
        <div >
            <nav className="nav">
                <div className="nav-left">
                    <a className="brand" href="#">
                        Tasker
                    </a>
                </div>
                <div className="nav-right">
                    <div className="tabs">
                        <a href="https://techformist.com">Techformist</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;