import React, { useState } from 'react';
import './LeftBar.css';

function FunctionSearch() {
    if(document.getElementById("SEARCH") !== null){
        var input, filter, div, li, a, i, txtValue;
        input = document.getElementById("SEARCH");
        filter = input.value.toUpperCase();
        div = document.getElementById("NAME");
        li = div.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}

const LeftBar = () => {

    const [data,SetData] = useState({
        search:""
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        SetData({...data,[name]:value})
    }

  return (
        <div class="LeftBar">
                <h2>Friend: 3</h2> 
                <div class="LeftBar_input">
                    <img src="/img/search.svg"/>
                    <input type="text" id="SEARCH" name="search" onkeyup={FunctionSearch()} placeholder="Search friends" value={""||data.search} onChange={handleChange}/>
                    {console.log(document.getElementById("SEARCH"))}
                </div>
                <div id="NAME">
                  <li className="no-bullet"><a>
                    <div class="LeftBar_user1">
                        <img src={"/img/pin.svg"}/>
                        <img src={"/img/user1.svg"}/>
                        <div class="LeftBar_user1_text">
                            <h2>Bank</h2>
                            <h3>สวัสดีค่ะ</h3>
                        </div>
                        <h4>Time</h4>
                    </div>
                  </a></li>
                   <li className="no-bullet"><a>
                    <div class="LeftBar_user2">
                        <img src={"/img/user2.svg"}/>
                        <div class="LeftBar_user2_text">
                            <h2>wow</h2>
                            <h3>message</h3>
                        </div>
                        <h4>Time</h4>
                    </div>
                  </a></li>
                   <li className="no-bullet"><a>
                    <div class="LeftBar_user3">
                        <img src={"/img/user3.svg"}/>
                        <div class="LeftBar_user3_text">
                            <h2>Umai</h2>
                            <h3>message</h3>
                        </div>
                        <h4>Time</h4>
                    </div>
                  </a></li>
                </div>
                <div class="LeftBar_vet">
                    <button onclick="ClickButtonVet()">ปรึกษาสัตวเเพทย์</button>
                </div>
            </div>
  );
}


export default LeftBar


