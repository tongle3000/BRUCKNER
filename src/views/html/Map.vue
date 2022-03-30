<script lang="ts" setup>

</script>
<template>
<div class="map-container">
  <div class="canvas-container" style="height: 712px;
               width: 1722px;
               margin-left: 88px">
                   <canvas id="thickness-map-canvas" from="1647814662751" to="1647825462751" min="-5190" max="5172.5" width="1660"
                    height="712" style="width: 1720px; height: 712px; transform: translate(0px, 0px);">
                    </canvas>
               </div>

<div class="trend-container">
              <b-thickness-trend id="trend" is-header-hidden="" is-rotated="" is-position-marker-hidden=""></b-thickness-trend>
        </div>
    <dom-if style="display: none;"><template is="dom-if"></template></dom-if>

<div class="profile-container">
      <b-thickness-profile id="profile" is-thickness-map-mode="" style="height: 65px; width: 1722px; padding-left: 88px;"></b-thickness-profile>
</div>

<svg id="thickness-map-svg" height="712">
    <defs>
          <linearGradient id="color-map-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0.8426966292134831%" stop-color="rgb(205, 0, 0)"></stop>
            <stop offset="0.8426966292134831%" stop-color="rgb(255, 255, 255)"></stop>
            <stop offset="1.1235955056179776%" stop-color="rgb(255, 255, 255)"></stop>
            <stop offset="1.1235955056179776%" stop-color="rgb(255, 153, 0)"></stop>
            <stop offset="2.5825926547040083%" stop-color="rgb(255, 153, 0)"></stop>
            <stop offset="4.041589803790039%" stop-color="rgb(255, 153, 0)"></stop>
            <stop offset="5.500586952876069%" stop-color="rgb(248, 156, 5)"></stop>
            <stop offset="6.9595841019621%" stop-color="rgb(241, 160, 9)"></stop>
            <stop offset="8.418581251048131%" stop-color="rgb(234, 163, 14)"></stop>
            <stop offset="9.87757840013416%" stop-color="rgb(227, 167, 19)"></stop>
            <stop offset="11.336575549220191%" stop-color="rgb(220, 170, 23)"></stop>
            <stop offset="12.795572698306222%" stop-color="rgb(213, 174, 28)"></stop>
            <stop offset="14.254569847392252%" stop-color="rgb(206, 177, 32)"></stop>
            <stop offset="15.713566996478283%" stop-color="rgb(199, 181, 37)"></stop>
            <stop offset="17.172564145564312%" stop-color="rgb(192, 184, 42)"></stop>
            <stop offset="18.631561294650343%" stop-color="rgb(185, 188, 46)"></stop>
            <stop offset="20.090558443736374%" stop-color="rgb(179, 191, 51)"></stop>
            <stop offset="21.549555592822404%" stop-color="rgb(172, 195, 56)"></stop>
            <stop offset="23.008552741908435%" stop-color="rgb(165, 198, 60)"></stop>
            <stop offset="24.467549890994466%" stop-color="rgb(158, 202, 65)"></stop>
            <stop offset="25.926547040080496%" stop-color="rgb(151, 205, 70)"></stop>
            <stop offset="27.385544189166527%" stop-color="rgb(144, 209, 74)"></stop>
            <stop offset="28.844541338252558%" stop-color="rgb(137, 212, 79)"></stop>
            <stop offset="30.30353848733859%" stop-color="rgb(130, 216, 83)"></stop>
            <stop offset="31.76253563642462%" stop-color="rgb(123, 219, 88)"></stop>
            <stop offset="33.22153278551065%" stop-color="rgb(116, 223, 93)"></stop>
            <stop offset="34.68052993459668%" stop-color="rgb(109, 226, 97)"></stop>
            <stop offset="36.13952708368271%" stop-color="rgb(102, 230, 102)"></stop>
            <stop offset="37.59852423276874%" stop-color="rgb(119, 232, 119)"></stop>
            <stop offset="39.05752138185477%" stop-color="rgb(136, 235, 136)"></stop>
            <stop offset="40.5165185309408%" stop-color="rgb(153, 238, 153)"></stop>
            <stop offset="41.97551568002683%" stop-color="rgb(170, 241, 170)"></stop>
            <stop offset="43.43451282911286%" stop-color="rgb(187, 244, 187)"></stop>
            <stop offset="44.89350997819889%" stop-color="rgb(204, 247, 204)"></stop>
            <stop offset="46.35250712728492%" stop-color="rgb(221, 249, 221)"></stop>
            <stop offset="47.811504276370954%" stop-color="rgb(238, 252, 238)"></stop>
            <stop offset="49.270501425456985%" stop-color="rgb(255, 255, 255)"></stop>
            <stop offset="50.729498574543015%" stop-color="rgb(235, 255, 255)"></stop>
            <stop offset="52.188495723629046%" stop-color="rgb(216, 255, 255)"></stop>
            <stop offset="53.64749287271508%" stop-color="rgb(196, 255, 255)"></stop>
            <stop offset="55.10649002180111%" stop-color="rgb(177, 255, 255)"></stop>
            <stop offset="56.56548717088714%" stop-color="rgb(157, 255, 255)"></stop>
            <stop offset="58.02448431997317%" stop-color="rgb(137, 255, 255)"></stop>
            <stop offset="59.4834814690592%" stop-color="rgb(118, 255, 255)"></stop>
            <stop offset="60.94247861814523%" stop-color="rgb(98, 255, 255)"></stop>
            <stop offset="62.40147576723126%" stop-color="rgb(78, 255, 255)"></stop>
            <stop offset="63.86047291631729%" stop-color="rgb(59, 255, 255)"></stop>
            <stop offset="65.31947006540332%" stop-color="rgb(39, 255, 255)"></stop>
            <stop offset="66.77846721448935%" stop-color="rgb(20, 255, 255)"></stop>
            <stop offset="68.23746436357538%" stop-color="rgb(0, 255, 255)"></stop>
            <stop offset="69.69646151266141%" stop-color="rgb(0, 241, 251)"></stop>
            <stop offset="71.15545866174745%" stop-color="rgb(0, 227, 247)"></stop>
            <stop offset="72.61445581083348%" stop-color="rgb(0, 212, 242)"></stop>
            <stop offset="74.0734529599195%" stop-color="rgb(0, 198, 238)"></stop>
            <stop offset="75.53245010900554%" stop-color="rgb(0, 184, 234)"></stop>
            <stop offset="76.99144725809157%" stop-color="rgb(0, 170, 230)"></stop>
            <stop offset="78.4504444071776%" stop-color="rgb(0, 156, 225)"></stop>
            <stop offset="79.90944155626363%" stop-color="rgb(0, 142, 221)"></stop>
            <stop offset="81.36843870534966%" stop-color="rgb(0, 128, 217)"></stop>
            <stop offset="82.82743585443569%" stop-color="rgb(0, 113, 212)"></stop>
            <stop offset="84.28643300352172%" stop-color="rgb(0, 99, 208)"></stop>
            <stop offset="85.74543015260775%" stop-color="rgb(0, 85, 204)"></stop>
            <stop offset="87.20442730169378%" stop-color="rgb(0, 71, 200)"></stop>
            <stop offset="88.66342445077981%" stop-color="rgb(0, 57, 196)"></stop>
            <stop offset="90.12242159986585%" stop-color="rgb(0, 43, 191)"></stop>
            <stop offset="91.58141874895188%" stop-color="rgb(0, 28, 187)"></stop>
            <stop offset="93.0404158980379%" stop-color="rgb(0, 14, 183)"></stop>
            <stop offset="94.49941304712394%" stop-color="rgb(0, 0, 179)"></stop>
            <stop offset="95.95841019620997%" stop-color="rgb(0, 0, 179)"></stop>
            <stop offset="97.417407345296%" stop-color="rgb(0, 0, 179)"></stop>
            <stop offset="99.15730337078652%" stop-color="rgb(0, 0, 179)"></stop>
            <stop offset="99.15730337078652%" stop-color="rgb(255, 255, 255)"></stop>
            <stop offset="99.43820224719101%" stop-color="rgb(255, 255, 255)"></stop>
            <stop offset="99.43820224719101%" stop-color="rgb(202, 0, 255)"></stop>
          </linearGradient>
    </defs>
    <g id="time-scale" transform="translate(70,0)"><g class="axis" fill="none" font-size="10" font-family="sans-serif" text-anchor="end"><path class="domain" stroke="currentColor" d="M-8,0.5H0.5V712.5H-8"></path><g class="tick" opacity="1" transform="translate(0,49.10382296296296)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">06:30</tspan><tspan x="0" style="" dy="10">41,222 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,108.4371562962963)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">06:45</tspan><tspan x="0" style="" dy="10">48,507 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,167.77048962962962)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">07:00</tspan><tspan x="0" style="" dy="10">6,305 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,227.10382296296297)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">07:15</tspan><tspan x="0" style="" dy="10">13,243 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,286.4371562962963)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">07:30</tspan><tspan x="0" style="" dy="10">20,544 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,345.7704896296296)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">07:45</tspan><tspan x="0" style="" dy="10">27,852 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,405.10382296296297)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">08:00</tspan><tspan x="0" style="" dy="10">35,162 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,464.43715629629634)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">08:15</tspan><tspan x="0" style="" dy="10">42,110 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,523.7704896296297)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">08:30</tspan><tspan x="0" style="" dy="10">49,372 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,583.103822962963)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">08:45</tspan><tspan x="0" style="" dy="10">7,218 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,642.4371562962963)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">09:00</tspan><tspan x="0" style="" dy="10">14,514 m</tspan></text></g><g class="tick" opacity="1" transform="translate(0,701.7704896296297)"><line stroke="currentColor" x2="-8"></line><text fill="currentColor" x="-11" dy="0.32em" y="-12.5px" transform="translate(-15)"><tspan x="0" style="" dy="10">09:15</tspan><tspan x="0" style="" dy="10">22,045 m</tspan></text></g></g><g class="axisMinor" fill="none" font-size="10" font-family="sans-serif" text-anchor="end"><path class="domain" stroke="currentColor" d="M-5,0.5H0.5V712.5H-5"></path><g class="tick" opacity="1" transform="translate(0,9.548267407407407)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,29.326045185185187)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,49.10382296296296)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,68.88160074074074)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,88.65937851851851)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,108.4371562962963)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,128.21493407407408)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,147.99271185185185)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,167.77048962962962)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,187.5482674074074)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,207.3260451851852)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,227.10382296296297)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,246.88160074074077)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,266.6593785185185)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,286.4371562962963)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,306.21493407407405)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,325.9927118518519)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,345.7704896296296)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,365.5482674074074)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,385.3260451851852)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,405.10382296296297)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,424.88160074074074)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,444.65937851851857)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,464.43715629629634)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,484.21493407407405)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,503.9927118518518)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,523.7704896296297)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,543.5482674074074)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,563.3260451851852)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,583.103822962963)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,602.8816007407407)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,622.6593785185186)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,642.4371562962963)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,662.214934074074)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,681.9927118518518)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g><g class="tick" opacity="1" transform="translate(0,701.7704896296297)"><line stroke="currentColor" x2="-5"></line><text fill="currentColor" x="-8" dy="0.32em"></text></g></g><rect class="time-scale-background" height="712" width="70" transform="translate(-70,0)"></rect></g>

    <g id="statuses"><g><foreignObject class="roll-foreign" height="16" x="0" width="116">
      <div class="roll-bar b-status-grade_1 b-status-grade_total_4"><span class="roll-bar-label">B 220321 0504</span></div>
      </foreignObject></g><g><foreignObject class="roll-foreign" height="16" x="117" width="405">
        <div class="roll-bar b-status-good_roll"><span class="roll-bar-label">B 220321 0647</span>
        </div></foreignObject></g><g><foreignObject class="roll-foreign" height="16" x="523" width="189">
          <div class="roll-bar b-status-good_roll"><span class="roll-bar-label">B 220321 0829</span></div>
          </foreignObject></g>
        </g>
        <g id="color-map" visible="" style="transform: translate(1828px, 0px); width: 42px; height: 712px;">
          <rect class="color-map-background" x="0" y="0" width="42" height="712" fill="url(#color-map-gradient)"></rect>
          <g class="major" transform="translate(0, 357)"><text fill="black" x="21" text-anchor="middle" dy="0.32em">0.00</text></g>
          <g class="major" transform="translate(0, 273.75)"><text fill="black" x="21" text-anchor="middle" dy="0.32em">0.05</text></g>
          <g class="major" transform="translate(0, 440.25)"><text fill="black" x="21" text-anchor="middle" dy="0.32em">-0.05</text></g>
          <g class="major" transform="translate(0, 190.5)"><text fill="black" x="21" text-anchor="middle" dy="0.32em">0.09</text></g>
          <g class="major" transform="translate(0, 523.5)"><text fill="black" x="21" text-anchor="middle" dy="0.32em">-0.09</text></g>
          <g class="major" transform="translate(0, 107.25)"><text fill="black" x="21" text-anchor="middle" dy="0.32em">0.14</text></g>
          <g class="major" transform="translate(0, 606.75)"><text fill="white" x="21" text-anchor="middle" dy="0.32em">-0.14</text></g>
          <g class="major" transform="translate(0, 24)"><text fill="black" x="21" text-anchor="middle" dy="0.32em">0.18</text></g>
          <g class="major" transform="translate(0, 690)"><text fill="white" x="21" text-anchor="middle" dy="0.32em">-0.18</text></g>
        </g>
        <rect id="canvas-area" style="x: 88; width: 1722px; height: 712px;"></rect>
  </svg>

<svg id="roll-change-line-container" style="height: 712px;">
            <g id="roll-change-lines"><path d="M0,116L1721,116"></path><path d="M0,522L1721,522"></path></g>
            <g id="coordinate-selection"></g>
        </svg>

<svg id="profile-tooltip-container"></svg>
        <svg id="trend-tooltip-container"></svg>

<div id="trend-and-profile-details-container">
              <div class="direction-details-container">
                  <div class="direction-name machine-direction">纵拉</div>
                <div class="position-value-and-unit-container">
      <span class="position-value">--</span>
    <span class="position-unit">µm</span>
                </div>
                <div class="position-value-and-container thickness">
      <span class="position-value">--</span>
    <span class="position-unit">%</span>
                </div>
            </div>
            <div class="direction-details-container">
                  <div class="direction-name traverse-direction">横拉</div>
                <div class="position-value-and-unit-container">
      <span class="position-value">--</span>
    <span class="position-unit">µm</span>
                </div>
                <div class="position-value-and-container two-sigma">
      <span class="position-value">--</span>
    <span class="position-unit">%</span>
                </div>
            </div>
        </div>
    <dom-if style="display: none;"><template is="dom-if"></template></dom-if>
            </div>
</template>
<style lang="less">

.map-container {
  position: relative;
}

.headline {
  display: flex;
  margin-bottom: 5px;
  min-height: 45px;
  width: 100%;
}

.headline .title-container {
  flex: 1;
  vertical-align: top;
  min-width: 155px;
}

.headline h1 {
  font-size: 16px;
  font-weight: normal;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  width: fit-content;
}

.headline #settings-icon {
  margin-right: 5px;
}

.headline b-icon {
  vertical-align: text-top;
  cursor: pointer;
}

.headline>div {
  height: 45px;
}

.middle-container {
  flex: 1;
  width: 100%;
  text-align: center;
  vertical-align: top;
  min-height: 45px;
  min-width: 548px;
}

.middle-container>.container {
  display: inline-flex;
  align-items: center;
  padding-bottom: 0.2em;
  padding-right: 24px;
}

.middle-container>.container div {
  font-size: 16px;
}

.type-selector-container {
  float: left;
  margin: 2px calc(251px + 1.8em) 0px 30px;
  min-width: 214px;
}

// b-input-option {
//   font-size: 13px;
// }

// b-input-select {
//   --b-input-fontsize: 16px;
// }

.headline>.control {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  min-width: 509px;
}

#go-to-now-button {
  margin-left: 46px;
  vertical-align: top;
}

#go-to-now-button[disabled] {
  background: #008c00;
  border: none;
}

#default-zoom-level-button {
  vertical-align: top;
  font-size: 16px;
  height: 28px;
  padding: 0px 2px;
  margin-left: 8px;
}

.control-button {
  background: white;
  border: none;
  height: 28px;
  padding: 0px 6px;
}

.control-button:hover, .control-button:hover, #datetime-range-picker:hover {
  background: #f9f9f9;
}

.control-button:active, .control-button:active {
  background: var(--b-black);
}

.map-control-btn {
  background: white;
  border: none;
  height: 28px;
  padding: 0 4px;
}

.map-control-btn:hover {
  background: #f9f9f9;
}

.map-control-btn:active {
  background: var(--b-black);
}

.timeRange {
  display: inline-block;
  vertical-align: top;
  line-height: 28px;
  height: 28px;
  padding-left: 5px;
  padding-right: 4px;
}

.timeRange:hover {
  background-color: #f9f9f9;
  cursor: pointer;
}

.timeRange .fromTime, .timeRange .fromDate, .timeRange .toDate, .timeRange .toTime {
  font-size: 16px;
}

.timeRange .fromTime, .timeRange .toTime {
  font-weight: bold;
}

.timeRange .delimiter {
  margin-left: 10px;
  margin-right: 10px;
}

#settings-dialog-content {
  width: 300px;
}

#settings-dialog-content b-checkbox {
  display: block;
}

#settings-dialog-content .content-header {
  padding-bottom: 5px;
}

#settings-dialog-content .content-title {
  padding: 20px 0 5px 0;
}

#settings-dialog-content #settings-dialog-lines {
  margin-left: 5px;
  margin-top: 6px;
  position: relative;
}

#settings-dialog-content .range-input {
  position: absolute;
  left: 90px;
  bottom: -2px;
}

#settings-dialog-content b-radio {
  --b-radio_-_padding:  0 3px; --b-radio_-_display: initial; --b-radio_-_cursor: initial; --b-radio_-_background: initial; --b-radio_-_color: initial; --b-radio_-_text-transform: initial; --b-radio_-_font-size: initial; --b-radio_-_line-height: initial; --b-radio_-_border-bottom: initial; --b-radio_-_width: initial; --b-radio_-_padding-left: initial; --b-radio_-_padding-right: initial; --b-radio_-_min-height: initial;
}

#settings-dialog-content b-radio.with-input {
  --b-radio_-_padding:  5px 3px 0 3px; --b-radio_-_display: initial; --b-radio_-_cursor: initial; --b-radio_-_background: initial; --b-radio_-_color: initial; --b-radio_-_text-transform: initial; --b-radio_-_font-size: initial; --b-radio_-_line-height: initial; --b-radio_-_border-bottom: initial; --b-radio_-_width: initial; --b-radio_-_padding-left: initial; --b-radio_-_padding-right: initial; --b-radio_-_min-height: initial;
}

#settings-dialog-content b-input-number {
  width: 83px;
  padding-left: 15px;
}

.canvas-container {
  overflow: hidden;
}

.canvas-container[preview] {
  padding-left: 0;
  height: 46px;
}

canvas {
  height: 100%;
  width: 100%;
}

#thickness-map-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: inherit;
}

#thickness-map-svg[preview] {
  top: 0;
}

#time-scale {
  shape-rendering: crispedges;
}

#time-scale .axis .tick>text {
  font-size: 11px;
}

.time-scale-background {
  fill: rgba(0, 0, 0, 0);
  cursor: -webkit-grab;
}

.time-scale-background:active {
  cursor: -webkit-grabbing;
}

#color-map {
  display: none;
  font-size: 12px;
}

#color-map[visible] {
  display: block;
}

#roll-change-lines, #coordinate-selection {
  transform: translate(88px, 1px);
}

#roll-change-lines path {
  stroke: black;
  stroke-width: 2;
}

#statuses {
  transform: rotate(90deg) translateY(-87px);
}

#statuses .roll-bar-label {
  transform: scale(-1,-1);
}

b-tooltip {
  font-size: 16px;
}

#canvas-area {
  fill: rgba(0, 0, 0, 0);
}

.trend-and-map-container {
  display: flex;
}

.trend-container {
  position: absolute;
  left: -141px;
  top: 132px;
  pointer-events: none;
  z-index: 1;
}

b-thickness-profile {
  height: 65px;
  width: 1491px;
}

b-thickness-trend {
  opacity: 0;
  height: 305px;
  width: 569px;
  transform: rotate(90deg);
}

.trend-container * {
  pointer-events: none;
}

#time-scale[withTrendAndProfile], #statuses[withTrendAndProfile] {
  display: none;
}

#roll-change-line-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: overlay;
}

#coordinate-selection {
  pointer-events: none;
}

#coordinate-selection white-line {
  stroke: rgba(255, 255, 255, 0.3);
}

.profile-container {height:45px;overflow: hidden;}

.profile-container[full] {
  margin-top: 5px;
  height: 183px;
}

.profile-container[hidden] {
  display: none;
}

b-calendar-datetime-range-dialog {
  --b-calendar-datetime-range-dialog-button_-_display:  none;
}

.control-table-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
}

#trend-and-profile-details-container {
  display: none;
}

#trend-and-profile-details-container[withTrendAndProfile] {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  bottom: 62px;
  left: 70px;
  width: 210px;
  height: 120px;
}

.direction-details-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.direction-details-container div:first-of-type {
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
}

.position-value-and-unit-container.thickness {
  min-width: 90px;
  text-align: center;
}

.position-value-and-unit-container.two-sigma {
  min-width: 70px;
  text-align: left;
}

.position-value {
  font-size: 24px;
}

.position-unit {
  font-size: 13px;
}

// b-input-select {
//   --b-input-select-options-z-index: 2
// }

#profile-tooltip-container {
  pointer-events: none;
  position: absolute;
  bottom: 33px;
  right: 0;
  width: calc(100% - 299px);
  z-index: 2;
  font-size: 14px;
}

#trend-tooltip-container {
  pointer-events: none;
  position: absolute;
  top: 172px;
  left: -102px;
  height: 226px;
  width: 569px;
  z-index: 2;
  transform: rotate(90deg);
}

#profile-tooltip-container #tooltip rect, #trend-tooltip-container #tooltip rect {
  fill: rgba(217,217,217, .90);
}

.direction-name {
  width: 33px;
  height: 29px;
  color: white;
}

.machine-direction {
  background: #75520c;
}

.traverse-direction {
  background: var(--b-black);
}

#statuses .roll-bar {
  height: 100%;
  font-size: 13px;
  color: #fff;
  border-radius: 2px;
  text-align: center;
  overflow: hidden;
  line-height: 100%;
}

#statuses .roll-bar::before {
  content: '';
  display: inline-block;
}

#statuses .roll-bar-label {
  display: inline-block;
  white-space: nowrap;
  line-height: 16px;
}

.b-status-good_roll, .b-status-productive {
  background-color: var(--b-status-pending_-_background-color);
  cursor: pointer;
}

.b-status-pending {
  background-color: var(--b-status-pending_-_background-color);
}

.b-status-recyclable, .b-status-non_recyclable {
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHcGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDgtMDdUMTI6NDU6NDUrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDItMDZUMTk6MjU6MzcrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAyLTA2VDE5OjI1OjM3KzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmRhNDkzNGVjLTM3MGYtNGUwMi1hYjFlLWExODIzZDNjNTBjZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdjN2MwZjkwLTUzNmItYWI0OC05MmZiLTZjMWEyNTliYjI2NiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmZkYmM1NTk2LTAyM2ItNGZkZi1hYzU0LTdlN2MzYzdlNjZkZCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmRiYzU1OTYtMDIzYi00ZmRmLWFjNTQtN2U3YzNjN2U2NmRkIiBzdEV2dDp3aGVuPSIyMDE4LTA4LTA3VDEyOjQ1OjQ1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjQzZTg5YjgtMTdlNC00MTJmLTkzN2MtMjVkMzg2MjAwNTNmIiBzdEV2dDp3aGVuPSIyMDE4LTA4LTA3VDEyOjQ1OjQ1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGE0OTM0ZWMtMzcwZi00ZTAyLWFiMWUtYTE4MjNkM2M1MGNmIiBzdEV2dDp3aGVuPSIyMDE5LTAyLTA2VDE5OjI1OjM3KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg0ODJjYjA0LWMyM2EtMTE3YS1iOGU5LTkxNTY3MGZhYzYxODwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr+jMVkAAACxSURBVEiJ7ZRBDoMwDARnrf7/y9sDoU0rA8GJ1EuRckAME9uxA8ljG8D7au817i/7sQxQA/aflFKApCEuekjKuVGZJD/uyjLO9pv7roXt16JQ25hJ8yOyxkUGVmWSiCvojgy2trklu8pAe7FXyKD1YQZlhzXSQlGN7Kg7lk9KrJQBxNA4Dcpgq2E5srQfV0WWctmFkF0KZxdHf8rlNPvvcQRVDypmZEOTMiOzXZuUs02fnWtxnbt3EoUAAAAASUVORK5CYII=');
  background-position: center center;
  color: #fff;
  background-repeat: var(--b-status-recyclable_-_background-repeat); background-color: var(--b-status-recyclable_-_background-color); background-position: var(--b-status-recyclable_-_background-position, center center);
}

.b-status-invalid {
  background-size: var(--b-status-invalid_-_background-size) !important; background-image: var(--b-status-invalid_-_background-image);
}

.b-status-shutdown {
  background: var(--b-status-shutdown_-_background);
}

.b-status-undefined, .b-status-cutback, .b-status-threading, .b-status-pur_speedup, .b-status-pur_thread, .b-status-tdo_speedup, .b-status-tdo_thread, .b-status-chr_thread, .b-status-mdo_thread, .b-status-initial, .b-status-exb_thread, .b-status-pur2_thread, .b-status-tdo2_thread, .b-status-tdo2_speedup, .b-status-pur3_thread, .b-status-wba_thread, .b-status-ovn_thread, .b-status-ovn_speedup {
  background: var(--b-status-threading_-_background);
}

.b-status-stabilizing {
  background: var(--b-status-stabilizing_-_background);
}

.b-status-purging {
  background: var(--b-status-purging_-_background);
}

.b-status-good_roll:hover, .b-status-productive:hover {
  background-color: var(--b-status-pending-hover_-_background-color);
}

.b-status-pending:hover {
  background-color: var(--b-status-pending-hover_-_background-color);
}

.b-status-recyclable:hover, .b-status-non_recyclable:hover {
  background-color: var(--b-status-recyclable-hover_-_background-color);
  cursor: pointer;
}

.b-status-invalid:hover {
  background-image: var(--b-status-invalid-hover_-_background-image);
}

.b-status-recyclable span, .b-status-non_recyclable span {
  text-shadow: -2px -2px 2px #006B00, 2px -2px 2px #006B00, -2px 3px 2px #006B00, 2px 3px 2px #006B00;
  padding: 0 2px;
}

div.hideLabel span {
  display: none;
}

.b-status-grade_1 {
  background-color: var(--b-status-productive_-_background-color);
  cursor: pointer;
}

.b-status-grade_2, .b-status-grade_3, .b-status-grade_4 {
  background-color: var(--b-status-pending_-_background-color);
  cursor: pointer;
}

.b-status-grade_1:hover {
  background-color: var(--b-status-productive-hover_-_background-color);
}

.b-status-grade_2:hover, .b-status-grade_3:hover, .b-status-grade_4:hover {
  background-color: var(--b-status-pending-hover_-_background-color);
}

.b-status-grade_total_4.b-status-grade_2 {
  background: var(--b-status-grade_2_total_4_-_background);
}

.b-status-grade_total_4.b-status-grade_2:hover {
  background: var(--b-status-grade_2_total_4_hover_-_background);
}

.b-status-grade_total_4.b-status-grade_3 {
  background: var(--b-status-grade_3_total_4_-_background);
}

.b-status-grade_total_4.b-status-grade_3:hover {
  background: var(--b-status-grade_3_total_4_hover_-_background);
}

.b-status-grade_total_4.b-status-grade_4 {
  background: var(--b-status-grade_4_total_4_-_background);
}

.b-status-grade_total_4.b-status-grade_4:hover {
  background: var(--b-status-grade_4_total_4_hover_-_background);
}

.b-status-grade_total_3.b-status-grade_3 {
  background: var(--b-status-grade_3_total_3_-_background);
}

.b-status-grade_total_3.b-status-grade_3:hover {
  background: var(--b-status-grade_3_total_3_hover_-_background);
}

.b-status-grade_total_3.b-status-grade_2 {
  background: var(--b-status-grade_2_total_3_-_background);
}

.b-status-grade_total_3.b-status-grade_2:hover {
  background: var(--b-status-grade_2_total_3_hover_-_background);
}

.b-status-grade_total_2.b-status-grade_2 {
  background: var(--b-status-grade_2_total_2_-_background);
}

.b-status-grade_total_2.b-status-grade_2:hover {
  background: var(--b-status-grade_2_total_2_hover_-_background);
}

</style>