import './LoginDialog.scss'
import { useRef, useEffect, useState } from 'react';


function LoginDialog({ isLogingDialogOpen, onClose }) {
    const dialoRef = useRef(null);
    const [activeTab, setActiveTab] = useState("login");

    useEffect(() => {
        if (isLogingDialogOpen && !dialoRef.current.hasAttribute('open')) {
            dialoRef.current.showModal();
        }
    }, [isLogingDialogOpen]);

    return (
        <dialog ref={dialoRef} onClose={onClose}>
            <form method="dialog">
                <nav className="tab-titles">
                    <a className={"tab-title " + (activeTab !== 'login' ? 'inactive-tab' : '')}
                        onClick={() => setActiveTab('login')}>Login</a>
                    <a className={"tab-title " + (activeTab !== 'register' ? 'inactive-tab' : '')}
                        onClick={() => setActiveTab('register')}>Register</a>
                </nav>
                <div className="tab-bodies">
                    {activeTab === 'login' ? (
                        <div className="tab-body">
                            <label htmlFor="login">Login</label>
                            <input type="text" id="login" />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                            <button className="goldy" onClick={onClose}>Login</button>
                        </div>
                    ) : (
                        <div className="tab-body">
                            <label htmlFor="login">Login</label>
                            <input type="text" id="login" />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                            <button className="goldy" onClick={onClose}>Register</button>
                        </div>
                    )}
                </div>

            </form>
        </dialog>
    )
}

export default LoginDialog
