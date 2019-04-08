<template>
    <div>
        <h1>{{ title }}</h1>
       <div>
           <form class="pure-form pure-form-aligned">
                <fieldset>
                    <div class="pure-control-group">
                        <label for="name">Username</label>
                        <input id="name" type="text" placeholder="Username">
                        <span class="pure-form-message-inline">This is a required field.</span>
                    </div>

                    <div class="pure-control-group">
                        <label for="password">Password</label>
                        <input id="password" type="password" placeholder="Password">
                    </div>

                    <div class="pure-control-group">
                        <label for="email">Email Address</label>
                        <input id="email" type="email" placeholder="Email Address">
                    </div>

                    

                    <div class="pure-controls">
                        <label for="cb" class="pure-checkbox">
                            <input id="cb" type="checkbox"> I've read the terms and conditions
                        </label>

                        <button type="submit" class="pure-button pure-button-primary">Submit</button>
                    </div>
                </fieldset>
            </form>

        <div>
            <select v-model="localselected">
                <option v-for="option in LocaleList" v-bind:value="option">
                    {{ option }}
                </option>
            </select>

            <select v-model="templateSelected">           
                <option v-for="item in templateList" v-bind:value="item.id">
                    {{ item.ENUM }}
                </option>
            </select>
            <p> {{ localselected }} {{templateSelected}}</p>
        </div>

        
       </div>
    </div>    
</template>

<script>
    export default{
        name:"IDP-Locale-Preview",
        data(){
            return{
                title: "IDPlus Locale Preview",
                localselected: "en-US",
                LocaleList: ["en-US", "en_GB", "de_DE"],
                templateSelected: 0,
                templateList:[
                    {
                        "id": 0,
                        "ENUM": "EIA_CHOOSE_ACCOUNT",
                        "template":"id.quickstart.choose-account.vm",
                        "variables":["$accounts"]
                    },
                    {
                        "id": 1,
                        "ENUM": "EIA_ACCESS_SUCCESS",
                        "template": "id.eia.access-success.vm",
                        "variables":["$instName"]
                    },
                    {
                        "id": 2,
                        "ENUM": "EIA_REGISTER",
                        "template":"id.register.vm",
                        "variables":["$namePolicy","$givenNameErrorMessageKey","$familyNameErrorMessageKey","$registerPwdErrorMessageKey"]
                    },
                    {
                        "id": 3,
                        "ENUM": "ACCESS_SUCCESS_3P",
                        "template": "id.eia.access-success.vm",
                        "variables":["$instName"]
                    }
                ]

            }
        }
    }
</script>


