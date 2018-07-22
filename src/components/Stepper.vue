<template>
  <v-layout row>
    <v-flex md6 xs0></v-flex>
    <v-flex md6 xs12 class="right">
      <v-stepper v-model="e1" class="elevation-0" vertical v-if="!finished">
        <v-stepper-step :complete="e1 > 1" step="1" editable>Pol</v-stepper-step>
        <v-stepper-content step="1">
          <div class="headline text-xs-center mb-5 white--text">Vaš pol</div>
          <v-card flat height="200px">
            <v-layout row>
              <v-flex md6 xs12 class="text-xs-center select-icon" id="male" @click="selectGender($event,'male')">
                <v-icon>sentiment_very_satisfied</v-icon>
                <div class="gender-title title white--text pt-2">Muški</div>
              </v-flex>
              <v-flex md6 xs12 class="text-xs-center select-icon" id="female" @click="selectGender($event, 'female')">
                <v-icon>face</v-icon>
                <div class="gender-title title white--text pt-2">Ženski</div>
              </v-flex>
            </v-layout>
          </v-card>
          <v-card-actions>
            <v-spacer/>
            <v-btn outline @click="e1 = 2">
              Dalje
            </v-btn>
          </v-card-actions>
        </v-stepper-content>
        <v-stepper-step :complete="e1 > 2" step="2" editable>Godine</v-stepper-step>
        <v-stepper-content step="2">
          <div class="headline text-xs-center mb-5 white--text">Vaše starostno doba?</div>
          <v-card class="elevation-0" height="200px">
            <v-card-text class="pt-5">
              <v-slider align-center v-model="ageValue" step="10" track-color="white" thumb-label="always" ticks></v-slider>
            </v-card-text>
          </v-card>
          <v-card-actions>
            <v-spacer/>
            <v-btn outline @click="e1 = 3">
              Dalje
            </v-btn>
          </v-card-actions>
        </v-stepper-content>

        <v-stepper-step :complete="e1 > 3" step="3" editable>Okolina</v-stepper-step>
        <v-stepper-content step="3">
          <div class="headline text-xs-center mb-5 white--text">Vaša okolina</div>
          <v-card class="step3 elevation-0">
            <v-layout row>
              <v-flex class="text-xs-center select-icon" id="environment1" @click="selectEnvironment('environment1')">
                <v-icon>wb_sunny</v-icon>
                <div class="gender-title title white--text py-4">Sunce / UV zračenje</div>
              </v-flex>
              <v-flex class="text-xs-center select-icon" id="environment2" @click="selectEnvironment('environment2')">
                <v-icon>whatshot</v-icon>
                <div class="gender-title title white--text py-4">Stres</div>
              </v-flex>
              <v-flex class="text-xs-center select-icon" id="environment3" @click="selectEnvironment('environment3')">
                <v-icon>ac_unit</v-icon>
                <div class="gender-title title white--text py-4">Nagle promene temperature</div>
              </v-flex>
              <v-flex class="text-xs-center select-icon" id="environment4" @click="selectEnvironment('environment4')">
                <v-icon>fastfood</v-icon>
                <div class="gender-title title white--text py-4">Neuravnotežena ishrana</div>
              </v-flex>
            </v-layout>
          </v-card>
          <v-card-actions>
            <v-spacer/>
            <v-btn outline @click="e1 = 4">
              Dalje
            </v-btn>
          </v-card-actions>
        </v-stepper-content>

        <v-stepper-step :complete="e1 > 4" step="4" editable>Koža</v-stepper-step>
        <v-stepper-content step="4">
          <div class="headline text-xs-center mb-5 white--text">Vaša koža je sklona iritacijama i crvenilu?</div>
          <v-card class="elevation-0" height="200px">
            <v-layout row>
              <v-flex class="text-xs-center select-icon" id="no" @click="chooseAnswer('no')">
                <v-icon>mood</v-icon>
                <div class="gender-title title white--text pt-2">Ne</div>
              </v-flex>
              <v-flex class="text-xs-center select-icon" id="yes" @click="chooseAnswer('yes')">
                <v-icon>mood_bad</v-icon>
                <div class="gender-title title white--text pt-2">Da</div>
              </v-flex>
            </v-layout>
          </v-card>
          <v-card-actions>
            <v-spacer/>
            <v-btn outline @click="e1 = 5">
              Dalje
            </v-btn>
          </v-card-actions>
        </v-stepper-content>

        <v-stepper-step step="5" editable>Vaša koža</v-stepper-step>
        <v-stepper-content step="5">
          <div class="headline text-xs-center mb-5 white--text">Vaša koža je?</div>
          <v-card class="elevation-0" height="200px">
            <v-card-text class="pt-5">

              <v-slider id="step5" v-model="step5Answer" :tick-labels="seasons" max="2" step="1" ticks="always" track-color="white" tick-size="5"></v-slider>
            </v-card-text>
          </v-card>
          <v-card-actions>
            <v-spacer/>
            <v-btn outline @click="finish()">
              Finish
            </v-btn>
          </v-card-actions>
        </v-stepper-content>
      </v-stepper>
      <div v-if="finished  && step4Answer=='yes'" class="mt-5 mx-4 pt-5">
        <v-flex md10 text-xs-left class="mt-5 pt-5">
          <div class="title">Rozacea je hronicni, zapaljenski proces koji se ispoljava u epizodama i zahvata 10% populacije. </div>
          <div class="subheading pt-4">Potražite savet dermatologa, naša preporuka je
            <i class="title"> Coupeliac gel.
            </i>
          </div>
          <span class="body-2">Rano lečenje može umanjiti mogucnost da se stanje pogorša.</span>
          <a href="https://drtheiss.rs/proizvodi/coupeliac-gel/23">
            <v-btn outline>Saznaj vise </v-btn>
          </a>
        </v-flex>
      </div>
      <div v-if="finished  && step4Answer=='no'" class="mt-5 mx-4 pt-5">
        <v-flex md10 text-xs-left class="mt-5 pt-5">
          <div class="title">Vaša koža je zdrava! </div>
        </v-flex>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  /* eslint-disable */

  export default {
    data() {
      return {
        finished: false,
        e1: 0,
        ageValue: 30,
        step5Answer: 1,
        seasons: ["Osetljiva", "Suva", "Nista od navedenog"],
        selectedGender: "",
        selectedEnvironment: [],
        step4Answer: ""
      };
    },
    methods: {
      selectGender(e, option) {
        document.getElementById("male").style.opacity = 1;
        document.getElementById("female").style.opacity = 1;
        if (option == "male") {
          document.getElementById("male").style.opacity = 0.3;
        } else {
          document.getElementById("female").style.opacity = 0.3;
        }
        this.selectedGender = option;
      },
      selectEnvironment(option) {
        if (document.getElementById(option).style.opacity == 0.3) {
          document.getElementById(option).style.opacity = 1.0;
          var index = this.selectedEnvironment.indexOf(option);
          if (index > -1) {
            this.selectedEnvironment.splice(index, 1);
          }
        } else {
          document.getElementById(option).style.opacity = 0.3;
          this.selectedEnvironment.push(optionZ);
        }
      },
      chooseAnswer(option) {
        document.getElementById("yes").style.opacity = 1;
        document.getElementById("no").style.opacity = 1;
        if (option == "yes") {
          document.getElementById("yes").style.opacity = 0.3;
        } else {
          document.getElementById("no").style.opacity = 0.3;
        }
        this.step4Answer = option;
      },
      finish() {
        this.finished = true;
      }
    }
  };

</script>

<style>
  .right .v-stepper{
    background: unset !important;
  }

  .right .v-icon {
    font-size: 150px;
  }

  .right .v-card {
    background: unset !important;
  }

  @media only screen and (max-width: 600px) {
    .v-icon {   
      font-size: 90px;
    }
  }

  @media only screen and (max-width: 600px) {
    .step3 .layout {
      flex-wrap: wrap;
    }
  }

  .step3 .v-icon {
    font-size: 100px;
  }

  .v-input.v-input--slider {
    margin: 0 auto;
    width: auto;
  }

  #step5.v-input.v-input--slider {
    width: auto;
    margin: 0 auto;
  }

  .select-icon {
    cursor: pointer;
  }

  .v-slider .v-slider__ticks-container .v-slider__ticks>span {
    white-space: pre-line !important;
  }

  a {
    color: white;
    text-decoration: unset;
  }

</style>
