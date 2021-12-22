import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import { auth } from '../firebase'



export const Chats = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true)

console.log(user)
    const handleLogout = async () => {
        await auth.signOut();

        navigate("/")
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'})
    }

    useEffect(() => {
        if (!user) {
            navigate("/")

            return;
        }
        
        axios.get('https://api.chatengine.io/user/me', {
            headers: {
                "project-id": "2ec35117-ae78-4604-9acf-f4080f492444",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
            .then(() => {
            setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email)
                formdata.append('username', user.displayName)
                formdata.append('secret', user.uid)

                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name)
                        
                            axios.post('https://api.chatengine.io/users',
                                formdata,
                                {
                                headers: {"private-key": "10511710-9a06-4347-b920-75407b3e58f0"}
                                })
                                .then(() => setLoading(false))
                        .catch((err)=> console.log(err))
                    })
        })
    }, [user, navigate])
    if(!user || loading) return 'Loading...'
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    <h1>Chatt-App</h1>
                </div>
                <div
                    className="logout-tab"
                    onClick={handleLogout}
                >
                    <p>Logout</p>
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="
                2ec35117-ae78-4604-9acf-f4080f492444"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}
