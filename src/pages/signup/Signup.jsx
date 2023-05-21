import SmallerHeader from "../../components/SmallerHeader"
import HeaderImage from "../../images/background3.jpg"
import Navbar from '../../components/Navbar'
import SignupFooter from "../../components/SignupFooter"
import { GiCheckMark } from 'react-icons/gi'

import '../home/home.css'
import './signup.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import sendUserInfos from "../../features/users/details/send_user_infos"


const Signup = () => {

    // Get user data from the form
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [ageRange, setAgeRange] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [preferred_course, setPreferedCourse] = useState("");
    const [one_on_one_mentorship, setOneOnOneMentorship] = useState("");   

    const handleSubmit = (event) => {
        event.preventDefault();
        sendUserInfos(
            firstName,
            lastName,
            email,
            phone_number,
            ageRange,
            gender,
            country,
            preferred_course,
            one_on_one_mentorship,
        );        
    }


    // interface formDataType {[key:string]: FormDataEntryValue}
    // const responseBody: formDataType = {}

    // const inputChangeHandler = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget as HTMLFormElement)
    //     formData.forEach((value, property:string) => responseBody[property] = value);
    //     console.log(JSON.stringify(responseBody))
    //Form submission happens here    

    return (

        <>
            <Navbar />
            <SmallerHeader title="Gain The Skills You Need To Get Hired" image={HeaderImage}>SIGN UP TO GET STARTED
            </SmallerHeader>
            <section >
                < div className='container signup_container'>
                    <div className='signup_options'>
                        <h2 className='signup_option_h2'>Eligibility Criteria</h2>
                        <article className='signup_option'>
                            <h4 className='signup_option_h4'>For Africans</h4>
                            <ul>
                                <li><GiCheckMark />  Must be of African origin</li>
                                <li><GiCheckMark />  Age between 18-34 years</li>
                                <li><GiCheckMark />  Access to a computer and internet during the programme</li>
                            </ul>
                        </article>
                        <article className='signup_option'>
                            <h4 className='signup_option_h4'>For Non-Africans</h4>
                            <ul>
                                <li><GiCheckMark />  Must pay for course</li>
                                <li><GiCheckMark />  Must be 18 years and above</li>
                                <li><GiCheckMark />  Access to a computer and internet during the programme</li>
                            </ul>
                        </article>
                        <h2 className='signup_option_h2'>Payment and cancellation</h2>
                        <article className='signup_option'>
                            <h4 className='signup_option_h4_'>For details on our Payment and Cancellation Terms & Conditions, Click <Link to="/payments" className="payment_a">here.</Link></h4>
                        </article>
                    </div>

                    <form onSubmit={handleSubmit} >{/* add post action & on sucessful posting, redirect to join community page (write a function) */}
                        <label className='form-label'>First Name</label><input type='text' name='firstName' onChange={(e) => setFirstName(e.target.value)} required />
                        <label className='form-label'>Last Name</label><input type='text' name='lastName' onChange={(e) => setLastName(e.target.value)} required />
                        <label className='form-label'>Email Address</label><input type='email' name='email' onChange={(e) => setEmail(e.target.value)} required />
                        <label className='form-label'>Phone Number</label><input type='number' name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} required />
                        <label className='form-label' for="age" >Age</label>
                        <select name="age" id="age" onChange={(e) => setAgeRange(e.target.value)} required>
                            <option value=" " disabled selected hidden>Please Select</option>
                            <option value=" 17 and below">17 and below</option>
                            <option value=" 18 to 23">18 to 23</option>
                            <option value=" 24 to 35">24 to 35</option>
                            <option value=" 35 and above">35 and above</option>
                        </select>


                        <label className='form-label' for="gender" >Gender</label>
                        <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} required>
                            <option value=" " disabled selected hidden>Please Select</option>
                            <option value=" Female">Female</option>
                            <option value=" Male">Male</option>
                            <option value=" None or Binary">None or Binary</option>
                            <option value=" Prefer Not To Say">Prefer Not To Say</option>
                        </select>

                        <label className='form-label' for="Country">Country</label>
                        <select id="country" name="country" onChange={(e) => setCountry(e.target.value)} required>
                            <option value=" " disabled selected hidden>Please Select Your Country</option>
                            <option value="AF - Afghanistan">Afghanistan</option>
                            <option value="AX - Aland">Aland Islands</option>
                            <option value="AL - Albania">Albania</option>
                            <option value="DZ - Algeria">Algeria</option>
                            <option value="AS - American">American Samoa</option>
                            <option value="AD - Andorra">Andorra</option>
                            <option value="AO - Angola">Angola</option>
                            <option value="AI - Anguilla">Anguilla</option>
                            <option value="AQ - Antarctica">Antarctica</option>
                            <option value="AG - Antigua">Antigua and Barbuda</option>
                            <option value="AR - Argentina">Argentina</option>
                            <option value="AM - Armenia">Armenia</option>
                            <option value="AW - Aruba">Aruba</option>
                            <option value="AU - Australia">Australia</option>
                            <option value="AT - Austria">Austria</option>
                            <option value="AZ - Azerbaijan">Azerbaijan</option>
                            <option value="BS - Bahamas">Bahamas</option>
                            <option value="BH - Bahrain">Bahrain</option>
                            <option value="BD - Bangladesh">Bangladesh</option>
                            <option value="BB - Barbados">Barbados</option>
                            <option value="BY - Belarus">Belarus</option>
                            <option value="BE - Belgium">Belgium</option>
                            <option value="BZ - Belize">Belize</option>
                            <option value="BJ - Benin">Benin</option>
                            <option value="BM - Bermuda">Bermuda</option>
                            <option value="BT - Bhutan">Bhutan</option>
                            <option value="BO - Bolivia">Bolivia</option>
                            <option value="BQ - Bonaire">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA - Bosnia">Bosnia and Herzegovina</option>
                            <option value="BW - Botswana">Botswana</option>
                            <option value="BV - Bouvet">Bouvet Island</option>
                            <option value="BR - Brazil">Brazil</option>
                            <option value="IO - British">British Indian Ocean Territory</option>
                            <option value="BN - Brunei">Brunei Darussalam</option>
                            <option value="BG - Bulgaria">Bulgaria</option>
                            <option value="BF - Burkina">Burkina Faso</option>
                            <option value="BI - Burundi">Burundi</option>
                            <option value="KH - Cambodia">Cambodia</option>
                            <option value="CM - Cameroon">Cameroon</option>
                            <option value="CA - Canada">Canada</option>
                            <option value="CV - Cape">Cape Verde</option>
                            <option value="KY - Cayman">Cayman Islands</option>
                            <option value="CF - Central">Central African Republic</option>
                            <option value="TD - Chad">Chad</option>
                            <option value="CL - Chile">Chile</option>
                            <option value="CN - China">China</option>
                            <option value="CX - Christmas">Christmas Island</option>
                            <option value="CC - Cocos">Cocos (Keeling) Islands</option>
                            <option value="CO - Colombia">Colombia</option>
                            <option value="KM - Comoros">Comoros</option>
                            <option value="CG - Congo">Congo</option>
                            <option value="CD - Congo">Congo, Democratic Republic of the Congo</option>
                            <option value="CK - Cook">Cook Islands</option>
                            <option value="CR - Costa">Costa Rica</option>
                            <option value="CI - Cote">Cote D'Ivoire</option>
                            <option value="HR - Croatia">Croatia</option>
                            <option value="CU - Cuba">Cuba</option>
                            <option value="CW - Curacao">Curacao</option>
                            <option value="CY - Cyprus">Cyprus</option>
                            <option value="CZ - Czech">Czech Republic</option>
                            <option value="DK - Denmark">Denmark</option>
                            <option value="DJ - Djibouti">Djibouti</option>
                            <option value="DM - Dominica">Dominica</option>
                            <option value="DO - Dominican">Dominican Republic</option>
                            <option value="EC - Ecuador">Ecuador</option>
                            <option value="EG - Egypt">Egypt</option>
                            <option value="SV - El">El Salvador</option>
                            <option value="GQ - Equatorial">Equatorial Guinea</option>
                            <option value="ER - Eritrea">Eritrea</option>
                            <option value="EE - Estonia">Estonia</option>
                            <option value="ET - Ethiopia">Ethiopia</option>
                            <option value="FK - Falkland">Falkland Islands (Malvinas)</option>
                            <option value="FO - Faroe">Faroe Islands</option>
                            <option value="FJ - Fiji">Fiji</option>
                            <option value="FI - Finland">Finland</option>
                            <option value="FR - France">France</option>
                            <option value="GF - French">French Guiana</option>
                            <option value="PF - French">French Polynesia</option>
                            <option value="TF - French">French Southern Territories</option>
                            <option value="GA - Gabon">Gabon</option>
                            <option value="GM - Gambia">Gambia</option>
                            <option value="GE - Georgia">Georgia</option>
                            <option value="DE - Germany">Germany</option>
                            <option value="GH - Ghana">Ghana</option>
                            <option value="GI - Gibraltar">Gibraltar</option>
                            <option value="GR - Greece">Greece</option>
                            <option value="GL - Greenland">Greenland</option>
                            <option value="GD - Grenada">Grenada</option>
                            <option value="GP - Guadeloupe">Guadeloupe</option>
                            <option value="GU - Guam">Guam</option>
                            <option value="GT - Guatemala">Guatemala</option>
                            <option value="GG - Guernsey">Guernsey</option>
                            <option value="GN - Guinea">Guinea</option>
                            <option value="GW - Guinea">Guinea-Bissau</option>
                            <option value="GY - Guyana">Guyana</option>
                            <option value="HT - Haiti">Haiti</option>
                            <option value="HM - Heard">Heard Island and Mcdonald Islands</option>
                            <option value="VA - Holy">Holy See (Vatican City State)</option>
                            <option value="HN - Honduras">Honduras</option>
                            <option value="HK - Hong">Hong Kong</option>
                            <option value="HU - Hungary">Hungary</option>
                            <option value="IS - Iceland">Iceland</option>
                            <option value="IN - India">India</option>
                            <option value="ID - Indonesia">Indonesia</option>
                            <option value="IR - Iran">Iran, Islamic Republic of</option>
                            <option value="IQ - Iraq">Iraq</option>
                            <option value="IE - Ireland">Ireland</option>
                            <option value="IM - Isle">Isle of Man</option>
                            <option value="IL - Israel">Israel</option>
                            <option value="IT - Italy">Italy</option>
                            <option value="JM - Jamaica">Jamaica</option>
                            <option value="JP - Japan">Japan</option>
                            <option value="JE - Jersey">Jersey</option>
                            <option value="JO - Jordan">Jordan</option>
                            <option value="KZ - Kazakhstan">Kazakhstan</option>
                            <option value="KE - Kenya">Kenya</option>
                            <option value="KI - Kiribati">Kiribati</option>
                            <option value="KP - Korea">Korea, Democratic People's Republic of</option>
                            <option value="KR - Korea">Korea, Republic of</option>
                            <option value="XK - Kosovo">Kosovo</option>
                            <option value="KW - Kuwait">Kuwait</option>
                            <option value="KG - Kyrgyzstan">Kyrgyzstan</option>
                            <option value="LA - Lao">Lao People's Democratic Republic</option>
                            <option value="LV - Latvia">Latvia</option>
                            <option value="LB - Lebanon">Lebanon</option>
                            <option value="LS - Lesotho">Lesotho</option>
                            <option value="LR - Liberia">Liberia</option>
                            <option value="LY - Libyan">Libyan Arab Jamahiriya</option>
                            <option value="LI - Liechtenstein">Liechtenstein</option>
                            <option value="LT - Lithuania">Lithuania</option>
                            <option value="LU - Luxembourg">Luxembourg</option>
                            <option value="MO - Macao">Macao</option>
                            <option value="MK - Macedonia">Macedonia, the Former Yugoslav Republic of</option>
                            <option value="MG - Madagascar">Madagascar</option>
                            <option value="MW - Malawi">Malawi</option>
                            <option value="MY - Malaysia">Malaysia</option>
                            <option value="MV - Maldives">Maldives</option>
                            <option value="ML - Mali">Mali</option>
                            <option value="MT - Malta">Malta</option>
                            <option value="MH - Marshall">Marshall Islands</option>
                            <option value="MQ - Martinique">Martinique</option>
                            <option value="MR - Mauritania">Mauritania</option>
                            <option value="MU - Mauritius">Mauritius</option>
                            <option value="YT - Mayotte">Mayotte</option>
                            <option value="MX - Mexico">Mexico</option>
                            <option value="FM - Micronesia">Micronesia, Federated States of</option>
                            <option value="MD - Moldova">Moldova, Republic of</option>
                            <option value="MC - Monaco">Monaco</option>
                            <option value="MN - Mongolia">Mongolia</option>
                            <option value="ME - Montenegro">Montenegro</option>
                            <option value="MS - Montserrat">Montserrat</option>
                            <option value="MA - Morocco">Morocco</option>
                            <option value="MZ - Mozambique">Mozambique</option>
                            <option value="MM - Myanmar">Myanmar</option>
                            <option value="NA - Namibia">Namibia</option>
                            <option value="NR - Nauru">Nauru</option>
                            <option value="NP - Nepal">Nepal</option>
                            <option value="NL - Netherlands">Netherlands</option>
                            <option value="AN - Netherlands">Netherlands Antilles</option>
                            <option value="NC - New">New Caledonia</option>
                            <option value="NZ - New">New Zealand</option>
                            <option value="NI - Nicaragua">Nicaragua</option>
                            <option value="NE - Niger">Niger</option>
                            <option value="NG - Nigeria">Nigeria</option>
                            <option value="NU - Niue">Niue</option>
                            <option value="NF - Norfolk">Norfolk Island</option>
                            <option value="MP - Northern">Northern Mariana Islands</option>
                            <option value="NO - Norway">Norway</option>
                            <option value="OM - Oman">Oman</option>
                            <option value="PK - Pakistan">Pakistan</option>
                            <option value="PW - Palau">Palau</option>
                            <option value="PS - Palestinian">Palestinian Territory, Occupied</option>
                            <option value="PA - Panama">Panama</option>
                            <option value="PG - Papua">Papua New Guinea</option>
                            <option value="PY - Paraguay">Paraguay</option>
                            <option value="PE - Peru">Peru</option>
                            <option value="PH - Philippines">Philippines</option>
                            <option value="PN - Pitcairn">Pitcairn</option>
                            <option value="PL - Poland">Poland</option>
                            <option value="PT - Portugal">Portugal</option>
                            <option value="PR - Puerto">Puerto Rico</option>
                            <option value="QA - Qatar">Qatar</option>
                            <option value="RE - Reunion">Reunion</option>
                            <option value="RO - Romania">Romania</option>
                            <option value="RU - Russian">Russian Federation</option>
                            <option value="RW - Rwanda">Rwanda</option>
                            <option value="BL - Saint">Saint Barthelemy</option>
                            <option value="SH - Saint">Saint Helena</option>
                            <option value="KN - Saint">Saint Kitts and Nevis</option>
                            <option value="LC - Saint">Saint Lucia</option>
                            <option value="MF - Saint">Saint Martin</option>
                            <option value="PM - Saint">Saint Pierre and Miquelon</option>
                            <option value="VC - Saint">Saint Vincent and the Grenadines</option>
                            <option value="WS - Samoa">Samoa</option>
                            <option value="SM - San">San Marino</option>
                            <option value="ST - Sao">Sao Tome and Principe</option>
                            <option value="SA - Saudi">Saudi Arabia</option>
                            <option value="SN - Senegal">Senegal</option>
                            <option value="RS - Serbia">Serbia</option>
                            <option value="CS - Serbia">Serbia and Montenegro</option>
                            <option value="SC - Seychelles">Seychelles</option>
                            <option value="SL - Sierra">Sierra Leone</option>
                            <option value="SG - Singapore">Singapore</option>
                            <option value="SX - Sint">Sint Maarten</option>
                            <option value="SK - Slovakia">Slovakia</option>
                            <option value="SI - Slovenia">Slovenia</option>
                            <option value="SB - Solomon">Solomon Islands</option>
                            <option value="SO - Somalia">Somalia</option>
                            <option value="ZA - South">South Africa</option>
                            <option value="GS - South">South Georgia and the South Sandwich Islands</option>
                            <option value="SS - South">South Sudan</option>
                            <option value="ES - Spain">Spain</option>
                            <option value="LK - Sri">Sri Lanka</option>
                            <option value="SD - Sudan">Sudan</option>
                            <option value="SR - Suriname">Suriname</option>
                            <option value="SJ - Svalbard">Svalbard and Jan Mayen</option>
                            <option value="SZ - Swaziland">Swaziland</option>
                            <option value="SE - Sweden">Sweden</option>
                            <option value="CH - Switzerland">Switzerland</option>
                            <option value="SY - Syrian">Syrian Arab Republic</option>
                            <option value="TW - Taiwan">Taiwan, Province of China</option>
                            <option value="TJ - Tajikistan">Tajikistan</option>
                            <option value="TZ - Tanzania">Tanzania, United Republic of</option>
                            <option value="TH - Thailand">Thailand</option>
                            <option value="TL - Timor">Timor-Leste</option>
                            <option value="TG - Togo">Togo</option>
                            <option value="TK - Tokelau">Tokelau</option>
                            <option value="TO - Tonga">Tonga</option>
                            <option value="TT - Trinidad">Trinidad and Tobago</option>
                            <option value="TN - Tunisia">Tunisia</option>
                            <option value="TR - Turkey">Turkey</option>
                            <option value="TM - Turkmenistan">Turkmenistan</option>
                            <option value="TC - Turks">Turks and Caicos Islands</option>
                            <option value="TV - Tuvalu">Tuvalu</option>
                            <option value="UG - Uganda">Uganda</option>
                            <option value="UA - Ukraine">Ukraine</option>
                            <option value="AE - United">United Arab Emirates</option>
                            <option value="GB - United">United Kingdom</option>
                            <option value="US - United">United States</option>
                            <option value="UM - United">United States Minor Outlying Islands</option>
                            <option value="UY - Uruguay">Uruguay</option>
                            <option value="UZ - Uzbekistan">Uzbekistan</option>
                            <option value="VU - Vanuatu">Vanuatu</option>
                            <option value="VE - Venezuela">Venezuela</option>
                            <option value="VN - Viet">Viet Nam</option>
                            <option value="VG - Virgin">Virgin Islands, British</option>
                            <option value="VI - Virgin">Virgin Islands, U.s.</option>
                            <option value="WF - Wallis">Wallis and Futuna</option>
                            <option value="EH - Western">Western Sahara</option>
                            <option value="YE - Yemen">Yemen</option>
                            <option value="ZM - Zambia">Zambia</option>
                            <option value="ZW - Zimbabwe">Zimbabwe</option>
                        </select>


                        <label className='form-label' for="courses" >Preferred course </label>
                        <select name="courses" id="courses" onChange={(e) => setPreferedCourse(e.target.value)} required>
                            <option value=" " disabled selected hidden>Please select program of your choice</option>
                            <option value=" Software Engineering">Software Engineering</option>
                            <option value=" Full stack Ruby on Rails">Full stack Ruby on Rails</option>
                            <option value=" None or Binary">Full stack Javascript</option>
                            <option value=" Prefer Not To Say">Intermediate and Advanced HTML and CSS</option>
                        </select>

                        <label className='form-label' for="payment agreement" ><b>1 on 1 mentorship - A career coach will be assigned to you.</b> [500 GHC Processing fee]
                        </label>
                        <select name="payment agreement" id="payment agreement" onChange={(e) => setOneOnOneMentorship(e.target.value)} required>
                            <option value=" " disabled selected hidden>Please Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div ><input type="checkbox" id="checkbox" name=""></input>
                            <label for="agreement"> I declare that the information I have provided is accurate and complete <br></br> <i><small>Providing false information will be in violation of our community guidelines.</small>*</i>  </label>
                        </div>
                        <div ><input type="checkbox" id="checkbox" name="" required></input>
                            <label for="agreement"> I hereby acknowledge that I have clearly read and understood the </label>
                        </div>
                        <div ><input type="checkbox" id="checkbox" name="" required></input>
                            <label for="agreement"> I agree to my email, phone number and address being stored and used to receive automated communications about my application.  </label>
                        </div>
                        <button type='submit' className='btnSubmit'>Submit</button>
                    </form>
                </div>

            </section>
            <SignupFooter />

        </>
    )
}

export default Signup