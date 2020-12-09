*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${REGISTER URL}   http://localhost:3000/register
${LOGIN URL}      http://localhost:3000/login
${BROWSER}        Chrome
${old_email}            nene199@gmail.com 
${old_password}         2020    
${old_nickname}         nene 
${old_PhoneNumber}      0899999998

${email}                bank1333@gmail.com
${password}             1333
${nickname}             bankNatchapol
${PhoneNumber}          0899999999

*** Test Cases ***
Reset form 
    Open Browser To DD Dinner Dog
    Input Email               ${email} 
    Input Password            ${password}
    Input Confirm Password    ${password}
    Input Nickname            ${nickname}
    Input PhoneNumber         ${PhoneNumber}
    Reset form     
    Close Browser

Invalid Register case1   
    Open Browser To DD Dinner Dog
    Input Email               ${email} 
    Input Password            ${old_password}
    Input Confirm Password    ${password}
    Input Nickname            ${nickname}
    Input PhoneNumber         ${PhoneNumber}
    Submit Credentials        
    login Page Should Be Open
    Close Browser

Valid Register1
    Open Browser To DD Dinner Dog
    Input Email               ${old_email} 
    Input Password            ${old_password}
    Input Confirm Password    ${old_password}
    Input Nickname            ${old_nickname}
    Input PhoneNumber         ${old_PhoneNumber}
    Submit Credentials        
    login Page Should Be Open
    Close Browser

Valid Register2
    Open Browser To DD Dinner Dog
    Input Email               ${email} 
    Input Password            ${password}
    Input Confirm Password    ${password}
    Input Nickname            ${nickname}
    Input PhoneNumber         ${PhoneNumber}
    Submit Credentials        
    login Page Should Be Open
    Close Browser

Invalid Register case2
    Open Browser To DD Dinner Dog
    Input Email               ${old_email} 
    Input Password            ${old_password}
    Input Confirm Password    ${old_password}
    Input Nickname            ${old_nickname}
    Input PhoneNumber         ${old_PhoneNumber}
    Submit Credentials        
    login Page Should Be Open
    Close Browser

*** Keywords ***
Open Browser To DD Dinner Dog 
    Open Browser       ${REGISTER URL}   ${BROWSER}  
    Title Should Be    DD Dinner Dog 

Input Email
    [Arguments]    ${email}
    Input Text     id = email            ${email}       ${old_email}  

Input Password
    [Arguments]    ${password}
    Input Text     id = password         ${password}    ${old_password}

Input Confirm Password
    [Arguments]    ${password}
    Input Text     id = confirm          ${password}    ${old_password}

Input Nickname
    [Arguments]    ${nickname}  
    Input Text     id = nickname         ${nickname}    ${old_nickname}

Input PhoneNumber
    [Arguments]    ${password}
    Input Text     id = PhoneNumber      ${PhoneNumber}    ${old_PhoneNumber}


Submit Credentials
    Click Button    id = submit_button

Reset form
    Click Button    id = Button_clear 

login Page Should Be Open
    Title Should Be    DD Dinner Dog
