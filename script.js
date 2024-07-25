
var keyNeeded = false;
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('level');


    function handleDropdownChange() {
        const selectedValue = dropdown.value;
        var key = 1680;
        var userInput = 0;
        keyNeeded = false;
        // Run different code based on the selected value
        switch (selectedValue) {
            case 'impact':
                keyNeeded = false;
                return "https://impact.codeninjas.com/login"
            case 'fundamentals':
                keyNeeded = false;
                return "https://csfirst.withgoogle.com/login-student"
            case 'one':
                keyNeeded = false;
               return "https://docs.google.com/presentation/d/1KSUTmTRdnqRpJsQ1je6uAaYoGqdrHlyu/edit#slide=id.p1"
            case 'two':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1zqHjEV0SXu-i-Sk8QdwqwuY4ipw8Bt9t/edit#slide=id.p1"
            case 'three':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1l5ZHUM65IZIG0xxYJnl1vsbl7FcBHKIM/edit#slide=id.p1"
            case 'four':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1cBji7BvKDUx6FLyYnX4erPc0igZ-tZKP/edit#slide=id.p1"
            case 'five':
                keyNeeded = false;
                alert("Last Lesson in Module 1!");
                return "https://docs.google.com/presentation/d/1mssNVO2np676imV6BVwvB-uSgz0hVlmS/edit#slide=id.p1"
            case 'six':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1t2r9IfZEIczVoDrah-cFIGMZXmqgkmKh/edit#slide=id.p1"
            case 'seven':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1yYza0EvQhuqaQKIgLj-Liepc-tmLb3Jx/edit#slide=id.p1"
            case 'eight':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1SV2bh1r597aK8TO_nNNm98qyRBC4Nxk6/edit#slide=id.p1"
            case 'nine':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1rbxoKbl2fuGs1JAQUTO2IDtgNU9O8b42/edit#slide=id.p1"
            case 'ten':
                keyNeeded = false;
                alert("Last Lesson in Module 2!");
                return "https://docs.google.com/presentation/d/1c-WtPngRHo5Z2UXse4ic_lO3QRVqyzaB/edit#slide=id.p1"
            case 'eleven':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1RbVIUVM5Z51UKyrYJCBfApCIqvJaLQ3F/edit#slide=id.p1"
            case 'twelve':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1xepG0zfnSRyFGxFJ10TlIqVxWWiyOWZu/edit#slide=id.p1"
            case 'thirteen':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/11C7KgZMH87Q1MnbCtcADeudNyQeAInGv/edit#slide=id.p1"
            case 'fourteen':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1lcirf11WCDGQ-Ka2ExOlXVV1XrMu0MXH/edit#slide=id.p1"
            case 'fifteen':
                keyNeeded = false;
                alert("Last Lesson in Module 3!");
                return "https://docs.google.com/presentation/d/1A5lfA9TkMAI683fwcmKEbqRF7_RztpkD/edit#slide=id.p1"
            case 'sixteen':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1RZt1oXEszb9mEcckzsktBKHpqvXFE9Ac/edit#slide=id.p1"
            case 'seventeen':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1ifO8-mQ59njPfflSo20UXNBAtUoIZQY5/edit#slide=id.p1"
            case 'eighteen':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/19Mk2rjUGd4Bvcl5PL7sx7etFuW5b9sZ6/edit#slide=id.p1"
            case 'nineteen':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1ErZjTh36NK6tUDwDfm-5ukMJipjbX0OT/edit#slide=id.p1"
            case 'twenty':
                keyNeeded = false;
                alert("Last Lesson in Module 4!");
                return "https://docs.google.com/presentation/d/1e19MU9jjFa5Fz2KJCkuBP3xPDf-OwxFf/edit#slide=id.p1"
            case 'twenty-one':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1MEuSD7OoOmddETWIp7v9I9RSMVN1FIa2/edit#slide=id.p1"
            case 'twenty-two':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1lOecbs8T3rfua7ILAE2-_JX-HTrDrryi/edit#slide=id.p1"
            case 'twenty-three':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1ajXw0IIhhNmlD0WeuKreIxWtZ-jU6P4s/edit#slide=id.p1"
            case 'twenty-four':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1QYWCDio2U8q17sKfb22PgYguFLG0YSUr/edit#slide=id.p1"
            case 'twenty-five':
                keyNeeded = false;
                alert("Last Lesson in Module 6!");
                return "https://docs.google.com/presentation/d/1W1u5wSf2QW9Z_EMUtLENY0kKtaM0U8-V/edit#slide=id.p1"
            case 'twenty-six':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1hWiQe9_JMS3EoZDaAzL7UAY1NIhFWQ2B/edit#slide=id.p1"
            case 'twenty-seven':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1Y1YAkywxX1_KTQGcnI6BLbQYxKgVQLjg/edit#slide=id.p1"
            case 'twenty-eight':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1SeAE8LO7C1SoaVJKGBU8fLSPkzc2R9I9/edit#slide=id.p1"
            case 'twenty-nine':
                keyNeeded = false;
                return "https://docs.google.com/presentation/d/1ryuqkabgqpiL44_fO7FioPpCWu8gFDmU/edit#slide=id.p1"
            case 'thirty':
                keyNeeded = false;
                alert("Last Lesson in Module 7!");
                return "https://docs.google.com/presentation/d/1FMN5Tl1xJDTQWLJBWnX7_rgzZESAN4nV/edit#slide=id.p1"
            case 'thirty-one':
                userInput = prompt("Enter Password");
                if(userInput == key){
                    return "https://docs.google.com/document/d/1teut1YSZuXvD72q8OB8x2fja-kCzqkE7WdPV8Wzwr9M/edit?usp=sharing"
                    
                }
                else{
                    keyNeeded = true;
                 
                    return null;
                }
            case 'ipTour':
                userInput = prompt("Enter Password");
                if(userInput == key){
                    return "https://tinyurl.com/cnhhiptour"
                    
                }
                else{
                    keyNeeded = true;
                  
                    return null;
                }
                case 'ipTourJR':
                    userInput = prompt("Enter Password");
                    if(userInput == key){
                        return "https://forms.codeninjas.com/jrgamebuilding"
                        
                    }
                    else{
                        keyNeeded = true;
                      
                        return null;
                    }
            case 'senseiWeb':
                userInput = prompt("Enter Password");
                if(userInput == key){
                    return "https://sensei.codeninjas.com/home"
                    
                }
                else{
                    keyNeeded = true;
                   
                    return null;
                }
            case 'typing':
                userInput = prompt("Enter Password");
                if(userInput == key){
                    return "https://www.typing.com/"
                    
                }
                else{
                    keyNeeded = true;
                   
                    return null;
                }
            case 'poki':
                userInput = prompt("Enter Password");
                if(userInput == key){
                    return "https://poki.com/"
                    
                }
                else{
                    keyNeeded = true;
                    
                    return null;
                }
            default:
               alert("Error Occured")
               return null;
        }
    }

document.getElementById('submitButton').addEventListener('click', () => {
    const url = handleDropdownChange();
    if(!keyNeeded){
    window.open(url, '_blank');
    }else{
        alert("Error!");
    }
 
});
});
