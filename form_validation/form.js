(function () {
    var Form = {
        createTooltip: function(text) {
            var rawTooltipTemplate = document.getElementById("tooltipTemplate");
            
            var tempContainer = document.createElement("div");
            tempContainer.innerHTML = rawTooltipTemplate.textContent;

            var tooltip = tempContainer.querySelector("div");
            var tooltipText = tooltip.querySelector("span");
            tooltipText.textContent = text;

            //document.body.appendChild(tooltip);

            return tooltip;
        },

        appendTooltipNextTo: function(elementSelector, text) {
            var tooltip = this.createTooltip(text);
            var element = document.querySelector(elementSelector);

            var leftPos = element.offsetLeft;
            var elementWidth = window.getComputedStyle(element).width;
            elementWidth = elementWidth.replace("px", "");
            elementWidth = parseInt(elementWidth);

            var elementPaddingLeft = window.getComputedStyle(element).paddingLeft;
            elementPaddingLeft = elementPaddingLeft.replace("px", "");
            elementPaddingLeft = parseInt(elementPaddingLeft);

            var elementPaddingRight = window.getComputedStyle(element).paddingRight;
            elementPaddingRight = elementPaddingRight.replace("px", "");
            elementPaddingRight = parseInt(elementPaddingRight);

            var tooltipPosition = leftPos + elementWidth + elementPaddingLeft + elementPaddingRight + 5;

            document.body.appendChild(tooltip);

            tooltip.style.left = tooltipPosition + "px";
            tooltip.style.position = "absolute";
        }
    };

    document.addEventListener("DOMContentLoaded", function() {
       Form.appendTooltipNextTo("#usernameField", "Some stuff!!!"); 
    });
})();