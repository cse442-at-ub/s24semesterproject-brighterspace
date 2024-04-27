import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "../UserSetting/settings.css"

const Settings = (props) => {
    const [passwordError, setPasswordError] = useState('')
    const [pronounError, setPronounError] = useState('')

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

    const updatePassword = () => {
        const old_pass_input = document.getElementById("old_password");
        const pass_input = document.getElementById("password");
        const cpass_input = document.getElementById("cpassword")

        if('' === old_pass_input.value || '' === pass_input.value || '' === cpass_input.value){
            setPasswordError('Complete all fields')
        }
        else if(cpass_input.value !== pass_input.value){
            setPasswordError('Passwords must match');
        }
        else {
            const request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.response);
                }
            }
            const creatAssignJSON = {"old_password": old_pass_input.value, "new_password": pass_input.value};
            //TODO replace with settings backend
            request.open("POST", "https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/functionSignUp.php");
            request.send(JSON.stringify(creatAssignJSON));
        }
    }

    const updatePronouns = () => {
        const pronoun_input = document.getElementById("pronouns");

        if('' === pronoun_input.value){
            setPronounError('Enter a pronoun')
        }
        else {
            const request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.response);
                }
            }
            const creatAssignJSON = {"pronoun": pronoun_input.value};
            //request.open("POST", "http://localhost:3000/PHPBackEnd/functionLoginIn.php");
            //replace below with settings backend
            request.open("POST", "https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442e/sprint3testing/s24semesterproject-brighterspace/PHPBackEnd/functionSignUp.php");
            request.send(JSON.stringify(creatAssignJSON));
        }
    }

    return (
        <div className="setting-background">
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Settings</div>
                <div className="subtext">
                    Change your information here!
                </div>
            </div>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={goHome} value={'Home'}/>
            </div>
            <div className="passwordcontainer">
            <br/>
            <div className={'password_inputs'}>
                <input
                    type="password"
                    placeholder="Old password"
                    id="old_password"
                    className="fix_distance"
                />
            </div>
            <div className={'password_inputs'}>
                <input
                    type="password"
                    placeholder="New password"
                    id="password"
                    className="fix_distance"
                />
            </div>
            <div className={'password_inputs'}>
                <input
                    type="password"
                    placeholder="Confirm new password"
                    id="cpassword"
                    className="fix_distance"
                />
            </div>
            <label className="errorLabel">{passwordError}</label>
            </div>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={updatePassword} value={'Update Password'}/>
            </div>
            <br/>
            <div>
                <label htmlFor="pronouns">Update Pronouns: </label>
                <select name="pronouns" id="pronouns">
                    <option value=""></option>
                    <option value="he">he/him</option>
                    <option value="she">she/her</option>
                    <option value="they">they/them</option>
                    <option value="any">any/all</option>
                </select>
            </div>

            <label className="errorLabel">{pronounError}</label>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={updatePronouns} value={'Update Pronouns'}/>
            </div>
            <br/>
            <div>
                <label htmlFor="timez">Update Timezone: </label>
                <select name="timez" id="timez">
                    <option value=""></option>
                    <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                    <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                    <option value="-10:00">(GMT -10:00) Hawaii</option>
                    <option value="-09:50">(GMT -9:30) Taiohae</option>
                    <option value="-09:00">(GMT -9:00) Alaska</option>
                    <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                    <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                    <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                    <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                    <option value="-04:50">(GMT -4:30) Caracas</option>
                    <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                    <option value="-03:50">(GMT -3:30) Newfoundland</option>
                    <option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
                    <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                    <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
                    <option value="+00:00">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
                    <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                    <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
                    <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                    <option value="+03:50">(GMT +3:30) Tehran</option>
                    <option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
                    <option value="+04:50">(GMT +4:30) Kabul</option>
                    <option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
                    <option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
                    <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                    <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
                    <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                    <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
                    <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                    <option value="+08:75">(GMT +8:45) Eucla</option>
                    <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                    <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                    <option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
                    <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                    <option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
                    <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                    <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                    <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                    <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                    <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
                </select>
            </div>
            <label className="errorLabel">{pronounError}</label>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={updatePronouns} value={'Update Timezone'}/>
            </div>


        </div>
        </div>
    )
}

export default Settings
