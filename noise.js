$(function() {
    var audioContext = new (typeof AudioContext !== "undefined" && AudioContext !== null ? AudioContext : webkitAudioContext);
    var masterGain = audioContext.createGain();
    masterGain.gain.value = 0.1;
    masterGain.connect(audioContext.destination);

    var stopDemo = function($button) {
        $button.removeAttr('disabled');
    };

    var startDemo = function($button) {
        var now = audioContext.currentTime;

        var effect = eval($button.parent().prev('pre').text() + "effect;");
        var sawWave = audioContext.createOscillator();
        sawWave.type = sawWave.SAWTOOTH;
        sawWave.start(now);
        var effectGain = audioContext.createGain();

        effect.connect(effectGain);
        effectGain.connect(masterGain);
        sawWave.connect(effect);


        /* Sweep from A3 to A6. */
        sawWave.frequency.setValueAtTime(65.41, now);
        sawWave.frequency.setValueAtTime(73.42, now + 1);
        sawWave.frequency.setValueAtTime(82.41, now + 2);
        sawWave.frequency.setValueAtTime(87.31, now + 3);
        sawWave.frequency.setValueAtTime(98, now + 4);
        sawWave.frequency.setValueAtTime(110, now + 5);
        sawWave.frequency.setValueAtTime(123.5, now + 6);

        //set gain to 1.0
        effectGain.gain.setValueAtTime(1.0, now);

        $button.attr('disabled', '');
        setTimeout(function() { stopDemo($button); }, 5000);
    };

    $("button.demo").each(function(i, button) {
        $(button).click(function(e) {
            var $button = $(this);
            if ($button.attr('disabled')) {
                stopDemo($button);
            } else {
                startDemo($button);
            }
        });
    });
});
