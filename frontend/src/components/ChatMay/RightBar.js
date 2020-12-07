import { useState } from 'react';
import './RightBar.css';

const RightBar = () => {
    return (
        <div class="RightBar">
            <div class="RightBar_DT">
                <div class="RightBar_DT_LineLeft"> <hr width="368"/> </div>
                    <h2>11/12/2020 , 12.30 PM</h2>
                    <div class="RightBar_DT_LineRight"> <hr width="368"/> </div>
                    </div>
                    <div class="RightBar_user1">
                        <img src="img/user1.svg" />
                        <div class="RightBar_user1_message">
                            <h2>สวัสดีค่ะ สนใจหมาค่ะ</h2>
                        </div>
                        <div class="RightBar_user1_active">
                            <h3>12.30 PM</h3>
                        </div>
                    </div>
                    <div class="RightBar_me">
                        <div class="RightBar_me_active">
                            <h3>Read</h3>
                            <h3>12.33 PM</h3>
                        </div>
                        <div class="RightBar_me_message">
                            <h2>สวัสดีค่ะ</h2>
                        </div>
                        <img src="img/user1small.svg" />
                    </div>
                    <div class="RightBar_message">
                        <div class="RightBar_message_img1"><img src="img/sent.svg" /> </div>
                        <div class="RightBar_message_img2"><img src="img/Vector.svg" /> </div>
                        <div class="RightBar_message_img3"><img src="img/microphone.svg" /> </div>
                        <div class="RightBar_message_img4"><img src="img/camera.svg" /> </div>
                    </div>
            </div>
    );
}


export default RightBar


