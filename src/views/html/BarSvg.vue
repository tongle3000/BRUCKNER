<script setup></script>
<template>
<svg id="mdoVisualization" width="100%" height="500px">
        <defs>
            <linearGradient id="mdx-area-background" x1="0%" y1="0%" x2="0%" y2="30%">
                <stop offset="0%" style="stop-color:rgba(255, 255, 255, 0); stop-opacity:1"></stop>
                <stop offset="100%" style="stop-color:rgba(255, 255, 255, 1); stop-opacity:1"></stop>
            </linearGradient>

            <filter id="mdx-area-shadow" height="130%">
                <feMerge>
                    <feMergeNode></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
                <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
            </filter>

            <pattern id="mdo-decrement-pattern" patternUnits="userSpaceOnUse" width="90" height="20">
                <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAUCAIAAACCmL1JAAAAAXNSR0IArs4
                c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACVSURBVFhH7dShDYNAGIbhm6YTdAH2YAL2OImiI+BIGIA
                qSBDIS2pIEBUVCAQOeVSR+ybgknuTX/2P/JLXeO9bt+a1e9g+vKL5vOctNTXPcgy/2Wuqhu9vP/5nuyU1NRfcO0skaiKZJRKlHaK
                0Q5R2iNIOUdohSjtEaYco7RClHaK0Q5R2iNIOUdohSjtEaYco7QjU9ic2vCuM3zzG8gAAAABJRU5ErkJggg==" x="0" y="0"
                    width="90" height="20"></image>
            </pattern>
        </defs>
        <g class="separator-lines">
            <line stroke="#000" class="separator-line" x1="0" x2="0" y1="418" y2="0"></line>
            <line stroke="#000" class="separator-line" x1="163.6" x2="163.6" y1="418" y2="0"></line>
            <line stroke="#000" class="separator-line" x1="327.2" x2="327.2" y1="418" y2="0"></line>
            <line stroke="#000" class="separator-line" x1="490.79999999999995" x2="490.79999999999995" y1="418" y2="0">
            </line>
            <line stroke="#000" class="separator-line" x1="654.4" x2="654.4" y1="418" y2="0"></line>
            <line stroke="#000" class="separator-line" x1="818" x2="818" y1="418" y2="0"></line>
        </g>
        <g class="zone-areas">
            <rect fill="white" class="zone-area zone-area-0" x="0" y="0" opacity="0" width="163.6" height="418"></rect>
            <rect fill="white" class="zone-area zone-area-1" x="163.6" y="0" opacity="0" width="163.6" height="418">
            </rect>
            <rect fill="white" class="zone-area zone-area-2" x="327.2" y="0" opacity="0" width="163.6" height="418">
            </rect>
            <rect fill="white" class="zone-area zone-area-3" x="490.79999999999995" y="0" opacity="0" width="163.6"
                height="418"></rect>
            <rect fill="white" class="zone-area zone-area-4" x="654.4" y="0" opacity="0" width="163.6" height="418">
            </rect>
            <rect fill="white" class="zone-area zone-area-5" x="818" y="0" opacity="0" width="163.6" height="418">
            </rect>
        </g>
        <g class="mdx">
            <rect class="mdx-area-shadow" opacity="0" fill="rgba(0,0,0,0)" stroke="black" transform="translate(-50)"
                width="100" height="109.79199886322021" x="109.06666666666666" y="308.2080011367798"></rect>
            <rect class="mdx-area" opacity="0" transform="translate(-50)" width="100" height="109.79199886322021"
                x="109.06666666666666" y="308.2080011367798"></rect>
            <rect transform="translate(-20)" stroke="#000" class="mdx-line undefined" width="40" x="109.06666666666666"
                y="357.2080011367798" height="60.791998863220215"></rect>
            <rect class="target-mdx-line decrement" transform="translate(-20)" width="40" stroke="#000"
                x="109.06666666666666" y="357.2080011367798" height="60.791998863220215"></rect>
            <g class="mdx-container"><text class="mdx-value" text-anchor="middle" opacity="1" x="109.06666666666666"
                    y="357.2080011367798">1.020</text>
                <foreignObject class="mdx-value-icon" height="10" width="10" opacity="1" overflow="visible"
                    x="142.06666666666666" y="322.2080011367798">
                    <div draggable="true" onmousedown="event.stopImmediatePropagation()"
                        ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw002.RatAut001Stt&quot;)">
                    </div>
                </foreignObject>
            </g><text class="target-mdx-value" text-anchor="middle" opacity="0" x="109.06666666666666"
                y="357.2080011367798">NaN</text>
            <g class="mdx-changing">
                <g class="mdx-changing-wrapper" opacity="0" style="transform: translate(109.067px, 357.208px);">
                    <path class="first-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -10px);"></path>
                    <path class="second-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -20px);"></path>
                    <path class="third-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -30px);"></path>
                </g>
            </g>
        </g>
        <g class="mdx">
            <rect class="mdx-area-shadow" opacity="0" fill="rgba(0,0,0,0)" stroke="black" transform="translate(-50)"
                width="100" height="300.5119874954224" x="272.66666666666663" y="117.48801250457763"></rect>
            <rect class="mdx-area" opacity="0" transform="translate(-50)" width="100" height="300.5119874954224"
                x="272.66666666666663" y="117.48801250457763"></rect>
            <rect transform="translate(-20)" stroke="#000" class="mdx-line undefined" width="40" x="272.66666666666663"
                y="166.48801250457763" height="251.51198749542237"></rect>
            <rect class="target-mdx-line decrement" transform="translate(-20)" width="40" stroke="#000"
                x="272.66666666666663" y="166.48801250457763" height="251.51198749542237"></rect>
            <g class="mdx-container"><text class="mdx-value" text-anchor="middle" opacity="1" x="272.66666666666663"
                    y="166.48801250457763">4.220</text>
                <foreignObject class="mdx-value-icon" height="10" width="10" opacity="1" overflow="visible"
                    x="305.66666666666663" y="131.48801250457763">
                    <div draggable="true" onmousedown="event.stopImmediatePropagation()"
                        ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw003.RatAut001Stt&quot;)">
                    </div>
                </foreignObject>
            </g><text class="target-mdx-value" text-anchor="middle" opacity="0" x="272.66666666666663"
                y="166.48801250457763">NaN</text>
            <g class="mdx-changing">
                <g class="mdx-changing-wrapper" opacity="0" style="transform: translate(272.667px, 166.488px);">
                    <path class="first-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -10px);"></path>
                    <path class="second-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -20px);"></path>
                    <path class="third-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -30px);"></path>
                </g>
            </g>
        </g>
        <g class="mdx">
            <rect class="mdx-area-shadow" opacity="0" fill="rgba(0,0,0,0)" stroke="black" transform="translate(-50)"
                width="100" height="115.75200028419493" x="436.26666666666665" y="302.24799971580507"></rect>
            <rect class="mdx-area" opacity="0" transform="translate(-50)" width="100" height="115.75200028419493"
                x="436.26666666666665" y="302.24799971580507"></rect>
            <rect transform="translate(-20)" stroke="#000" class="mdx-line undefined" width="40" x="436.26666666666665"
                y="351.24799971580507" height="66.75200028419493"></rect>
            <rect class="target-mdx-line decrement" transform="translate(-20)" width="40" stroke="#000"
                x="436.26666666666665" y="351.24799971580507" height="66.75200028419493"></rect>
            <g class="mdx-container"><text class="mdx-value" text-anchor="middle" opacity="1" x="436.26666666666665"
                    y="351.24799971580507">1.120</text>
                <foreignObject class="mdx-value-icon" height="10" width="10" opacity="1" overflow="visible"
                    x="469.26666666666665" y="316.24799971580507">
                    <div draggable="true" onmousedown="event.stopImmediatePropagation()"
                        ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw004.RatAut001Stt&quot;)">
                    </div>
                </foreignObject>
            </g><text class="target-mdx-value" text-anchor="middle" opacity="0" x="436.26666666666665"
                y="351.24799971580507">NaN</text>
            <g class="mdx-changing">
                <g class="mdx-changing-wrapper" opacity="0" style="transform: translate(436.267px, 351.248px);">
                    <path class="first-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -10px);"></path>
                    <path class="second-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -20px);"></path>
                    <path class="third-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -30px);"></path>
                </g>
            </g>
        </g>
        <g class="mdx">
            <rect class="mdx-area-shadow" opacity="0" fill="rgba(0,0,0,0)" stroke="black" transform="translate(-50)"
                width="100" height="109.79199886322021" x="599.8666666666666" y="308.2080011367798"></rect>
            <rect class="mdx-area" opacity="0" transform="translate(-50)" width="100" height="109.79199886322021"
                x="599.8666666666666" y="308.2080011367798"></rect>
            <rect transform="translate(-20)" stroke="#000" class="mdx-line undefined" width="40" x="599.8666666666666"
                y="357.2080011367798" height="60.791998863220215"></rect>
            <rect class="target-mdx-line decrement" transform="translate(-20)" width="40" stroke="#000"
                x="599.8666666666666" y="357.2080011367798" height="60.791998863220215"></rect>
            <g class="mdx-container"><text class="mdx-value" text-anchor="middle" opacity="1" x="599.8666666666666"
                    y="357.2080011367798">1.020</text>
                <foreignObject class="mdx-value-icon" height="10" width="10" opacity="1" overflow="visible"
                    x="632.8666666666666" y="322.2080011367798">
                    <div draggable="true" onmousedown="event.stopImmediatePropagation()"
                        ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw005.RatAut001Stt&quot;)">
                    </div>
                </foreignObject>
            </g><text class="target-mdx-value" text-anchor="middle" opacity="0" x="599.8666666666666"
                y="357.2080011367798">NaN</text>
            <g class="mdx-changing">
                <g class="mdx-changing-wrapper" opacity="0" style="transform: translate(599.867px, 357.208px);">
                    <path class="first-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -10px);"></path>
                    <path class="second-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -20px);"></path>
                    <path class="third-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -30px);"></path>
                </g>
            </g>
        </g>
        <g class="mdx">
            <rect class="mdx-area-shadow" opacity="0" fill="rgba(0,0,0,0)" stroke="black" transform="translate(-50)"
                width="100" height="107.40800113677977" x="763.4666666666667" y="310.5919988632202"></rect>
            <rect class="mdx-area" opacity="0" transform="translate(-50)" width="100" height="107.40800113677977"
                x="763.4666666666667" y="310.5919988632202"></rect>
            <rect transform="translate(-20)" stroke="#000" class="mdx-line undefined" width="40" x="763.4666666666667"
                y="359.5919988632202" height="58.408001136779774"></rect>
            <rect class="target-mdx-line decrement" transform="translate(-20)" width="40" stroke="#000"
                x="763.4666666666667" y="359.5919988632202" height="58.408001136779774"></rect>
            <g class="mdx-container"><text class="mdx-value" text-anchor="middle" opacity="1" x="763.4666666666667"
                    y="359.5919988632202">0.980</text>
                <foreignObject class="mdx-value-icon" height="10" width="10" opacity="1" overflow="visible"
                    x="796.4666666666667" y="324.5919988632202">
                    <div draggable="true" onmousedown="event.stopImmediatePropagation()"
                        ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw006.RatAut001Stt&quot;)">
                    </div>
                </foreignObject>
            </g><text class="target-mdx-value" text-anchor="middle" opacity="0" x="763.4666666666667"
                y="359.5919988632202">NaN</text>
            <g class="mdx-changing">
                <g class="mdx-changing-wrapper" opacity="0" style="transform: translate(763.467px, 359.592px);">
                    <path class="first-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -10px);"></path>
                    <path class="second-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -20px);"></path>
                    <path class="third-changing-arrow" d="M8 15L1.94 4.5L14.06 4.5z"
                        style="transform: translate(-8px, -30px);"></path>
                </g>
            </g>
        </g>
        <g class="absolute-tension">
            <line class="absolute-line" stroke="#000" y1="418" y2="353.33550908478765" x1="54.53333333333333"
                x2="54.53333333333333"></line>
            <foreignObject class="absolute-value" opacity="1" overflow="visible" y="353.33550908478765"
                x="54.53333333333333"><span draggable="true"
                    ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw002Ten.FlmTen&quot;)">1,341</span>
            </foreignObject>
        </g>
        <g class="absolute-tension">
            <line class="absolute-line" stroke="#000" y1="418" y2="120.03007478535802" x1="218.13333333333333"
                x2="218.13333333333333"></line>
            <foreignObject class="absolute-value" opacity="1" overflow="visible" y="120.03007478535802"
                x="218.13333333333333"><span draggable="true"
                    ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw003Ten.FlmTen&quot;)">6,178</span>
            </foreignObject>
        </g>
        <g class="absolute-tension">
            <line class="absolute-line" stroke="#000" y1="418" y2="150.9693214441735" x1="381.73333333333335"
                x2="381.73333333333335"></line>
            <foreignObject class="absolute-value" opacity="1" overflow="visible" y="150.9693214441735"
                x="381.73333333333335"><span draggable="true"
                    ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw004Ten.FlmTen&quot;)">5,537</span>
            </foreignObject>
        </g>
        <g class="absolute-tension">
            <line class="absolute-line" stroke="#000" y1="418" y2="215.7424916068245" x1="545.3333333333333"
                x2="545.3333333333333"></line>
            <foreignObject class="absolute-value" opacity="1" overflow="visible" y="215.7424916068245"
                x="545.3333333333333"><span draggable="true"
                    ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw005Ten.FlmTen&quot;)">4,194</span>
            </foreignObject>
        </g>
        <g class="absolute-tension">
            <line class="absolute-line" stroke="#000" y1="418" y2="279.15983740843893" x1="708.9333333333333"
                x2="708.9333333333333"></line>
            <foreignObject class="absolute-value" opacity="1" overflow="visible" y="279.15983740843893"
                x="708.9333333333333"><span draggable="true"
                    ondragstart="event.dataTransfer.setData(&quot;datapoint&quot;, &quot;StrMdo.DrvDrw006Ten.FlmTen&quot;)">2,879</span>
            </foreignObject>
        </g>
    </svg>

</template>