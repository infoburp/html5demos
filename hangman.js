
window.onload = function () {
                var paper = Raphael("canvas", 640, 480),
                    btn = document.getElementById("run"),
                    cd = document.getElementById("code");

                (btn.onclick = function () {
                    paper.clear();
                    paper.rect(0, 0, 640, 480, 10).attr({fill: "#fff", stroke: "none"});
                    try {
                        (new Function("paper", "window", "document", cd.value)).call(paper, paper);
                    } catch (e) {
                        alert(e.message || e);
                    }
                })();
            };