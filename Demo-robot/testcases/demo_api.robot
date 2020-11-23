*** Settings ***
Library           RequestsLibrary

*** Variables ***
${url}              https://reqres.in
${api_get_user}     /api/users/2

*** Test Cases ***
TC_002 Get request for REST API
    Create Session    get_session   ${url}    disable_warnings=1
    ${response}=    Get Request    get_session    ${api_get_user}
    Should Be Equal As Strings   ${response.status_code}    200




