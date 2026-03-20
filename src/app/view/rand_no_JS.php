<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/src/css/position.css">
        <link rel="stylesheet" href="/src/css/style.css">
        <link rel="stylesheet" href="/src/css/fonts.css">
        <link rel="stylesheet" href="/src/css/rand_no_JS/position.css">
        <link rel="stylesheet" href="/src/css/rand_no_JS/style.css">
    </head>
    <body>
        <!-- Основные окна -->
        <input class="tools__input" type="radio" name="main_window" id="messages">
        <input class="tools__input" type="radio" name="main_window" id="default">
        <input class="tools__input" type="radio" name="main_window" id="alarms">
        <!-- Управление списками -->
        <input class="tools__input" type="checkbox" name="selectListsSection_area">
        <main class="tools">
            <div class="tools__div tools-communication">
                <div class="tools-communication__div">
                    <label class="tools-communication__label" for="messages">
                        <svg class="tools-communication__svg" viewBox="0 0 32 32">
                            <path d="M25 20.822c0.414-0 0.75-0.336 0.75-0.75v0-18.072c-0-0.414-0.336-0.75-0.75-0.75h-23c-0.414 0-0.75 0.336-0.75 0.75v0 18.072c0 0.414 0.336 0.75 0.75 0.75h5.821v4.178c0 0.292 0.167 0.545 0.411 0.668l0.004 0.002c0.096 0.050 0.21 0.080 0.331 0.080 0.001 0 0.002 0 0.004 0h-0c0.17-0 0.326-0.057 0.452-0.152l-0.002 0.001 6.371-4.777zM14.692 19.473l-5.371 4.027v-3.428c-0-0.414-0.336-0.75-0.75-0.75h-5.821v-16.572h21.5v16.572h-9.107c-0.17 0-0.326 0.057-0.452 0.152l0.002-0.001zM30 9.25h-1c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h0.25v14.215h-4.965c-0.414 0-0.75 0.336-0.75 0.75v0 2.785l-4.514-3.385c-0.123-0.094-0.279-0.15-0.449-0.15-0 0-0 0-0.001 0h-4.572c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h4.322l5.514 4.135c0.123 0.094 0.28 0.15 0.449 0.15 0.123 0 0.238-0.030 0.34-0.082l-0.004 0.002c0.247-0.126 0.414-0.378 0.414-0.67v0-3.535h4.965c0.414-0 0.75-0.336 0.75-0.75v0-15.715c-0-0.414-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <p class="tools-communication__p">4</p>
                    </label>
                </div>
                <div class="tools-communication-timer">
                    <button class="tools-communication-timer__button tools__button_startTimeCounter">
                        <svg class="tools-communication-timer__svg" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 6H6V18H10.5V6ZM7.5 16.5V7.5H9V16.5H7.5ZM18 6H13.5V18H18V6ZM15 16.5V7.5H16.5V16.5H15Z"></path>
                        </svg>
                    </button>
                    <p class="tools-communication-timer__p">
                        <span class="tools-communication-timer__hours">01</span>:<span class="tools-communication-timer__minutes">27</span>:<span class="tools-communication-timer__seconds">35</span>
                    </p>
                    <button class="tools-communication-timer__button tools__button_stopTimeCounter">
                        <svg class="tools-communication-timer__svg" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6H18V18H6V6ZM16 16V8H8V16H16Z"></path>
                        </svg>
                    </button>
                </div>
                <div class="tools-communication__div">
                    <label class="tools-communication__label" for="alarms">
                        <svg class="tools-communication__svg" viewBox="0 0 36 36">
                            <path d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"></path>
                            <path  d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"></path>
                            <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                        </svg>
                        <p class="tools-communication__p">5</p>
                    </label>
                </div>
            </div>
            <div class="tools__div tools-common">
                <div class="tools-common-actions">
                    <div class="tools-common-actions__div tools-common-actions__div_back">
                        <button class="tools-common-actions__button tools__button_splitList">
                            <svg class="tools-common-actions__svg" viewBox="0 0 17 17">
                                <path d="M10.646 13.146l0.707 0.707-2.853 2.854-2.854-2.854 0.707-0.707 1.647 1.647v-3.772h1v3.772l1.646-1.647zM8 2.207v3.772h1v-3.772l1.646 1.646 0.707-0.707-2.853-2.853-2.854 2.853 0.707 0.707 1.647-1.646zM0 8v1h17v-1h-17z"></path>
                            </svg>
                        </button>
                        <button class="tools-common-actions__button tools__button_combineLists">
                            <svg class="tools-common-actions__svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1l-.5.5v3l.5.5h3l.5-.5v-3L4.5 1h-3zM2 4V2h2v2H2zm-.5 2l-.5.5v3l.5.5h3l.5-.5v-3L4.5 6h-3zM2 9V7h2v2H2zm-1 2.5l.5-.5h3l.5.5v3l-.5.5h-3l-.5-.5v-3zm1 .5v2h2v-2H2zm10.5-7l-.5.5v6l.5.5h3l.5-.5v-6l-.5-.5h-3zM15 8h-2V6h2v2zm0 3h-2V9h2v2zM9.1 8H6v1h3.1l-1 1 .7.6 1.8-1.8v-.7L8.8 6.3l-.7.7 1 1z"></path>
                            </svg>
                        </button>
                        <button class="tools-common-actions__button tools__button_createList">
                            <svg class="tools-common-actions__svg" viewBox="0 0 32 32">
                                <path d="M24,15v2h-7v7h-2v-7H8v-2h7V8h2v7H24z M24.485,24.485c-4.686,4.686-12.284,4.686-16.971,0
                                    c-4.686-4.686-4.686-12.284,0-16.971c4.687-4.686,12.284-4.686,16.971,0C29.172,12.201,29.172,19.799,24.485,24.485z M23.071,8.929
                                    c-3.842-3.842-10.167-3.975-14.142,0c-3.899,3.899-3.899,10.243,0,14.142c3.975,3.975,10.301,3.841,14.142,0
                                    C26.97,19.172,26.97,12.828,23.071,8.929z"></path>
                            </svg>
                        </button>
                        <button class="tools-common-actions__button tools__button_showMoreListActions">
                            <svg class="tools-common-actions__svg" viewBox="0 0 1024 1024">
                                <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="tools-common-actions__div tools-common-actions__div_next">
                        <button class="tools-common-actions__button tools__button_showLessListActions">
                            <svg class="tools-common-actions__svg" viewBox="0 0 1024 1024">
                                <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                            </svg>
                        </button>
                        <button class="tools-common-actions__button tools__button_deleteList">
                            <svg class="tools-common-actions__svg" viewBox="0 0 1024 1024" style="opacity: 1;">
                                <path d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
                            </svg>
                        </button>
                        <button class="tools-common-actions__button tools__button_shareList">
                            <svg class="tools-common-actions__svg" viewBox="0 0 32 32" style="opacity: 1;">
                                <path d="M27 22c-1.646 0-3.103 0.8-4.013 2.028l-13.168-6.71c0.114-0.421 0.181-0.86 0.181-1.317 0-0.572-0.101-1.119-0.277-1.63l13.242-6.426c0.909 1.244 2.375 2.056 4.035 2.056 2.762 0 5-2.239 5-5s-2.238-5-5-5-5 2.239-5 5c0 0.388 0.049 0.764 0.133 1.127l-13.432 6.518c-0.915-1.009-2.231-1.646-3.7-1.646-2.761 0-5 2.239-5 5s2.239 5 5 5c1.59 0 3.004-0.744 3.92-1.902l13.222 6.739c-0.090 0.374-0.142 0.762-0.142 1.163 0 2.761 2.238 5 5 5s5-2.239 5-5-2.238-5-5-5zM27 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM5 19c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.344 3 3s-1.343 3-3 3zM27 30c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                            </svg>
                        </button>
                        <button class="tools-common-actions__button tools__button_editList">
                            <svg class="tools-common-actions__svg" viewBox="0 0 24 24" style="opacity: 1;">
                                <path d="M4 16L3.46967 15.4697C3.32902 15.6103 3.25 15.8011 3.25 16H4ZM17 3L17.5303 2.46967C17.2374 2.17678 16.7626 2.17678 16.4697 2.46967L17 3ZM21 7L21.5303 7.53033C21.8232 7.23744 21.8232 6.76256 21.5303 6.46967L21 7ZM8 20V20.75C8.19891 20.75 8.38968 20.671 8.53033 20.5303L8 20ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM12 19.25C11.5858 19.25 11.25 19.5858 11.25 20C11.25 20.4142 11.5858 20.75 12 20.75V19.25ZM20.5 20.75C20.9142 20.75 21.25 20.4142 21.25 20C21.25 19.5858 20.9142 19.25 20.5 19.25V20.75ZM4.53033 16.5303L17.5303 3.53033L16.4697 2.46967L3.46967 15.4697L4.53033 16.5303ZM16.4697 3.53033L20.4697 7.53033L21.5303 6.46967L17.5303 2.46967L16.4697 3.53033ZM20.4697 6.46967L7.46967 19.4697L8.53033 20.5303L21.5303 7.53033L20.4697 6.46967ZM8 19.25H4V20.75H8V19.25ZM4.75 20V16H3.25V20H4.75ZM13.4697 6.53033L17.4697 10.5303L18.5303 9.46967L14.5303 5.46967L13.4697 6.53033ZM12 20.75H20.5V19.25H12V20.75Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="tools-common-search">
                    <button class="tools-common-search__button">
                        <svg class="tools-common-search__svg" viewBox="0 0 24 24">
                            <path d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z"></path>
                            <path d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="tools__div tools-listsControl">
                <div class="tools-listsControl__div tools-listsControl-workingGroup">
                    <button class="tools-listsControl-workingGroup-item">
                        <svg class="tools-listsControl-workingGroup-item__svg" viewBox="0 0 32 32" style="opacity: 1;">
                            <path d="M15.992 2c3.396 0 6.998 2.86 6.998 4.995v4.997c0 1.924-0.8 5.604-2.945 7.293-0.547 0.43-0.831 1.115-0.749 1.807 0.082 0.692 0.518 1.291 1.151 1.582l8.703 4.127c0.068 0.031 0.834 0.16 0.834 1.23l0.001 1.952-27.984 0.002v-2.029c0-0.795 0.596-1.045 0.835-1.154l8.782-4.145c0.63-0.289 1.065-0.885 1.149-1.573s-0.193-1.37-0.733-1.803c-2.078-1.668-3.046-5.335-3.046-7.287v-4.997c0.001-2.089 3.638-4.995 7.004-4.995zM15.992-0c-4.416 0-9.004 3.686-9.004 6.996v4.997c0 2.184 0.997 6.601 3.793 8.847l-8.783 4.145s-1.998 0.89-1.998 1.999v3.001c0 1.105 0.895 1.999 1.998 1.999h27.986c1.105 0 1.999-0.895 1.999-1.999v-3.001c0-1.175-1.999-1.999-1.999-1.999l-8.703-4.127c2.77-2.18 3.708-6.464 3.708-8.865v-4.997c0-3.31-4.582-6.995-8.998-6.995v0z"></path>
                        </svg>
                    </button>
                    <button class="tools-listsControl-workingGroup-item">
                        <svg class="tools-listsControl-workingGroup-item__svg" viewBox="0 0 32 32" style="opacity: 1;">
                            <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z"></path>
                        </svg>
                    </button>
                    <button class="tools-listsControl-workingGroup-item">
                        <svg class="svg-stroke tools-listsControl-workingGroup-item__svg" viewBox="0 0 32 32" style="opacity: 1;">
                            <style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style>
                            <circle class="cls-1" cx="16" cy="13" r="5"></circle>
                            <path class="cls-1" d="M23,28A7,7,0,0,0,9,28Z"></path>
                            <path class="cls-1" d="M24,14a5,5,0,1,0-4-8"></path>
                            <path class="cls-1" d="M25,24h6a7,7,0,0,0-7-7"></path>
                            <path class="cls-1" d="M12,6a5,5,0,1,0-4,8"></path>
                            <path class="cls-1" d="M8,17a7,7,0,0,0-7,7H7"></path>
                        </svg>
                    </button>
                </div>
                <div class="tools-listsControl__div tools-listsControl-selectedSection">
                    <label class="tools-listsControl-selectedSection-name tools-listsControl-selectedSection-name_cath">
                        <pre class="tools-listsControl-selectedSection-name__pre">Наименование категории</pre>
                    </label>
                    <label class="tools-listsControl-selectedSection-switcher tools-listsControl-selectedSection-switcher_next">
                        <svg class="tools-listsControl-selectedSection-switcher__svg" viewBox="0 0 1024 1024" style="opacity: 1;">
                            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
                        </svg>
                    </label>
                    <label style="display:none;" class="tools-listsControl-selectedSection-switcher tools-listsControl-selectedSection-switcher_back">
                        <svg style="opacity: 1;" class="tools-listsControl-selectedSection-switcher__svg" viewBox="0 0 1024 1024">
                            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                        </svg>
                    </label>
                    <label style="display:none;" class="tools-listsControl-selectedSection-name tools-listsControl-selectedSection-name_group">
                        <pre class="tools-listsControl-selectedSection-name__pre">Наименование группы</pre>                        
                    </label> 
                </div>
            </div>
            <div class="tools__div tools-sectionEditingArea">
                <div class="tools-sectionEditingArea-appearance">
                    <input class="tools-sectionEditingArea-appearance__input" type="text" name="listsSectionName" placeholder="Наименование раздела . . .">
                    <button class="tools-sectionEditingArea-appearance__button_setColor"></button>
                </div>
                <div class="tools-sectionEditingArea-colors">
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_fff"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_aaa"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_f00"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_ff0"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_0f0"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_0ff"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_22f"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_f0f"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_840"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors__button_000"></button>
                    <button class="tools-sectionEditingArea-colors__button tools-sectionEditingArea-colors_unsetColor">
                        <svg class="tools-sectionEditingArea-colors__svg" viewBox="0 0 1024 1024">
                            <path d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
                        </svg>
                    </button>
                </div>
                <div class="tools-sectionEditingArea-actions">
                    <!-- <button class="tools-sectionEditingArea-actions__button">
                        <svg class="tools-sectionEditingArea-actions__svg" viewBox="0 0 24 24">
                            <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"></path>
                        </svg>
                    </button>
                    <button class="tools-sectionEditingArea-actions__button tools-sectionEditingArea-actions__button_smallSvg">
                        <svg class="tools-sectionEditingArea-actions__svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                        </svg>
                    </button> -->
                    <button class="tools-sectionEditingArea-actions__button">
                        <svg class="tools-sectionEditingArea-actions__svg" viewBox="0 0 1024 1024">
                            <path d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
                        </svg>
                    </button>
                    <button class="tools-sectionEditingArea-actions__button">
                        <svg class="tools-sectionEditingArea-actions__svg" viewBox="0 0 24 24">
                            <path d="M16.765 2c1.187 0 1.363.06 1.51.168L21.662 4.7a.845.845 0 0 1 .339.677v15.78a.844.844 0 0 1-.844.844H2.844A.844.844 0 0 1 2 21.156V2.844A.844.844 0 0 1 2.844 2zM17 21v-7H7v7zM14 3v3h1V3zM7 3v6h10V3h-1v4h-3V3zM3 21h3v-8h12v8h3V5.452l-3-2.278v6.17a.769.769 0 0 1-.844.656H6.844A.769.769 0 0 1 6 9.344V3H3z"></path>
                        </svg>
                    </button>
                    <button class="tools-sectionEditingArea-actions__button">
                        <svg class="tools-sectionEditingArea-actions__svg" viewBox="0 0 1024 1024">
                            <path d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="tools__div tools-sectionSelectionArea">
                <div class="tools-sectionSelectionArea-currentSectionInfo">
                    <pre class="tools-sectionSelectionArea-currentSectionInfo__pre">Наименование раздела</pre>
                    <button class="tools-sectionSelectionArea-currentSectionInfo__button">
                        <svg class="tools-sectionSelectionArea-currentSectionInfo__svg" viewBox="0 0 24 24">
                            <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"></path>
                        </svg>
                    </button>
                </div>
                <div class="tools-sectionSelectionArea__div">
                    <div class="tools-sectionSelectionArea-navigation">
    
                    </div>
                    <div class="tools-sectionSelectionArea-sectionsList">
    
                    </div>
                </div>
            </div>
            <div class="tools__div tools-something">

            </div>
        </main>
    </body>
</html>