var current = "Intro";
var Before;

var qr;
var qrCurrent;

var opened = false;

function next(danew) {
    if (opened == true) {
        OpenProjects();
    }
    if (danew != current) {
        Before = document.getElementById(current);
        var viewportClasses = document.getElementById("ViewPort").classList;
        Before.children[0].children[0].style.opacity = "100%";
        Before.children[1].children[0].style.opacity = "100%";
        Before.children[0].children[0].classList.remove('LeftAppear');
        Before.children[1].children[0].classList.remove('RightAppear');
        Before.children[0].children[0].classList.add('LeftDisappear');
        Before.children[1].children[0].classList.add('RightDisappear');
        setTimeout(disapper, 500);

        if (current == "Experience") {
            document.getElementById("ViewPort").style.backgroundColor = "#4f4a50";
            viewportClasses.add('Lighten');
            viewportClasses.remove('Darken');
        }

        var After = document.getElementById(danew);
        After.style.display = "block";
        After.children[0].children[0].style.opacity = "0%";
        After.children[1].children[0].style.opacity = "0%";
        After.children[0].children[0].classList.remove('LeftDisappear');
        After.children[1].children[0].classList.remove('RightDisappear')
        After.children[0].children[0].classList.add('LeftAppear');
        After.children[1].children[0].classList.add('RightAppear');
        current = danew;
    }
}

function disapper() {
    Before.style.display = "none";
}

function Throw(input) {
    if (qrCurrent != input) {
        var Buttons = document.getElementById("Contacts").children[0].children[0].children[2];
        if (qrCurrent == "Github") {
            Buttons.children[0].classList.remove("Throw");
            Buttons.children[0].classList.add("Retrieve");
            Buttons.children[0].style.position = "relative";
        }
        if (qrCurrent == "Fiverr") {
            Buttons.children[1].classList.remove("Throw");
            Buttons.children[1].classList.add("Retrieve");
            Buttons.children[1].style.position = "relative";
        }
        if (qrCurrent == "Facebook") {
            Buttons.children[2].classList.remove("Throw");
            Buttons.children[2].classList.add("Retrieve");
            Buttons.children[2].style.position = "relative";
        }
        qrCurrent = input;
        if (input == "Github") {
            Buttons.children[0].classList.add("Throw");
            Buttons.children[0].classList.remove("Retrieve");
            Buttons.children[0].style.position = "absolute";
        }
        if (input == "Fiverr") {
            var Buttons = document.getElementById("Contacts").children[0].children[0].children[2];
            Buttons.children[1].classList.add("Throw");
            Buttons.children[1].classList.remove("Retrieve");
            Buttons.children[1].style.position = "absolute";
        }
        if (input == "Facebook") {
            var Buttons = document.getElementById("Contacts").children[0].children[0].children[2];
            Buttons.children[2].classList.add("Throw");
            Buttons.children[2].classList.remove("Retrieve");
            Buttons.children[2].style.position = "absolute";
        }
        document.getElementById("Images").children[0].children[0].classList.remove("NotGenerate")
        document.getElementById("Images").children[0].children[0].classList.add("Generate")
        document.getElementById("Images").children[0].classList.remove("NotGenerate")
        document.getElementById("Images").children[0].classList.add("Generate")
        document.getElementById("Images").children[0].style.display = "block";
        qr = input;
        setTimeout(Reveal, 1000);
    }
}

function Reveal() {
    document.getElementById("Images").children[1].children[0].style.display = "none";
    document.getElementById("Images").children[2].children[0].style.display = "none";
    document.getElementById("Images").children[3].children[0].style.display = "none";
    document.getElementById("Images").children[0].style.opacity = "100%";
    document.getElementById("Images").children[0].classList.remove("Generate");
    document.getElementById("Images").children[0].classList.add("NotGenerate");
    document.getElementById("Images").children[0].style.display = "none";
    document.getElementById("Images").children[0].children[0].classList.remove("Generate")
    if (qr == "Github") {
        document.getElementById("Images").children[1].children[0].style.display = "block";
    }
    if (qr == "Fiverr") {
        document.getElementById("Images").children[2].children[0].style.display = "block";
    }
    if (qr == "Facebook") {
        document.getElementById("Images").children[3].children[0].style.display = "block";
    }
}

function OpenProjects() {
    var frontheader = document.getElementById("ProjectsHeader");
    if (opened == false) {
        frontheader.style.height = "0%";
        frontheader.style.display = "block";
        frontheader.classList.add("ProjectOpen");
        frontheader.classList.remove("ProjectClose");

        frontheader.children[0].style.opacity = "0%";
        frontheader.children[0].classList.add("Generate");
        frontheader.children[0].classList.remove("NotGenerate");
        frontheader.children[0].style.display = "flex";
        opened = true;
    }
    else {
        frontheader.style.height = "100%";
        frontheader.classList.add("ProjectClose");
        frontheader.classList.remove("ProjectOpen");
        
        frontheader.children[0].style.opacity = "100%";
        frontheader.children[0].classList.remove("Generate");
        frontheader.children[0].classList.add("NotGenerate");
        opened = false;
        setTimeout(DisapperTabs, 1000);
    }
}

function DisapperTabs() {
    var frontheader = document.getElementById("ProjectsHeader");
    frontheader.children[0].style.display = "none";
    frontheader.style.display = "none";
}

function searchEngine(data, query) {
    query = query.toLowerCase();
    return data.filter(item => item.toLowerCase().includes(query));
}

document.getElementById("SearchEngine").addEventListener("input", () => {
    if (document.getElementById("SearchEngine").value != "") {
        var projects = [
            "Chess",
            "Tetris",
            "Math Training App",
            "Kids App",
            "Pong"
        ];
        query = document.getElementById("SearchEngine").value.toLowerCase();
        var projsee = projects.filter(item => item.toLowerCase().includes(query));
        for (let i = 0; i < document.getElementById("ProjectsElem").childElementCount; i++) {
            document.getElementById("ProjectsElem").children[i].style.display = "none";
        }
        console.log(projsee);
        var inputproj = [
            "",
            "",
            "",
            "",
            ""
        ];
        for (let i = 0; i < projects.length; i++) {
            for (let j = 0; j < projsee.length; j++) {
                if (projects[i] == projsee[j]) {
                    inputproj[i] = projsee[j];
                }
            }
        }
        for (let i = 0; i < inputproj.length; i++) {
            if (inputproj[i] != "") {
                document.getElementById("ProjectsElem").children[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < document.getElementById("ProjectsElem").childElementCount; i++) {
            document.getElementById("ProjectsElem").children[i].style.display = "block";
        }
    }
});