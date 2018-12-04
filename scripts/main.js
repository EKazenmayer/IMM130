(function () {
    const map = {};

    if (document.cookie.trim().length > 0) {
        const pairs = document.cookie.split(";");

        for (let i = 0; i < pairs.length; i++) {
            const keyValue = pairs[i].trim().split("=");

            map[keyValue[0].trim()] = keyValue[1].trim();
        }
    }

    window.cookies = {
        get: function (key) {
            return map[key];
        },
        set: function (key, value) {
            map[key] = value;
            document.cookie = key + "=" + value + ";";
        }
    };
})();

function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function submitLesson1() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    if (name == null || name == "" || age == null || age == "" || parseInt(age, 10) < 0 || parseInt(age, 10) > 2147483647) {
        window.alert("Please provide valid input for all fields.");
    } else {
        cookies.set("name", encodeHTML(name));
        cookies.set("age", encodeHTML(age));

        window.location.href = "lesson1a.html";
    }
}

function loadLesson1a() {
    let name = cookies.get("name");
    let age = cookies.get("age");

    document.getElementById("lesson1a0").innerHTML = "Welcome to the Cafe, " + name;
    document.getElementById("lesson1a1").innerHTML = "You're " + age + "? Cool beans! In fact, if today was your birthday, the cafe would give you " + age + " coffee beans - one for each year!";
}

function loadLesson1b() {
    let name = cookies.get("name");
    let age = cookies.get("age");

    document.getElementById("lesson1code").innerHTML =
        "String name = \"" + name + "\";\n" +
        "int age = " + age + ";\n" +
        "System.out.println(\"Welcome to the Cafe, \" + name + \"!\");\n" +
        "System.out.print(\"You're \" + age + \"? Cool beans! \");\n" +
        "System.out.println(\"In fact, if today was your birthday, we would give you \" + age + \" coffee beans - one for each year!\");\n";
}

function submitLesson2() {
    let e = document.getElementById("drinksCoffee");
    let drinksCoffee = e.options[e.selectedIndex].value;
    let numPackets = document.getElementById("numPackets").value;
    if (numPackets == null || numPackets == "" || parseInt(numPackets, 10) < 0 || parseInt(numPackets, 10) > 2147483647) {
        window.alert("Please provide valid input for all fields.");
    } else {
        cookies.set("drinksCoffee", drinksCoffee);
        cookies.set("numPackets", encodeHTML(numPackets));

        window.location.href = "lesson2a.html";
    }
}

function loadLesson2a() {
    let drinksCoffee = cookies.get("drinksCoffee");
    let numPackets = cookies.get("numPackets");

    if (drinksCoffee == "true") {
        typeOfDrink = "coffee";
    } else {
        typeOfDrink = "tea";
    }

    if (numPackets == 0) {
        customMessage = "It's really bitter!";
    } else if (numPackets == 1 || numPackets == 2) {
        customMessage = "Just right!";
    } else if (numPackets >= 3) {
        customMessage = "How sweet!";
    }

    document.getElementById("lesson2a").innerHTML = "She made you " + typeOfDrink + " with " + numPackets + " packets of sugar.<br>" + customMessage;
}

function loadLesson2b() {
    let drinksCoffee = cookies.get("drinksCoffee");
    let numPackets = cookies.get("numPackets");

    document.getElementById("lesson2code").innerHTML =
        "boolean drinksCoffee = " + drinksCoffee + ";\n" +
        "int numPackets = " + numPackets + ";\n" +
        "String typeOfDrink;\nif (drinksCoffee == true) {\n" +
        "    typeOfDrink = \"coffee\";\n" +
        "}\n" +
        "else {\n" +
        "    typeOfDrink = \"tea\";\n" +
        "}\n" +
        "System.out.print(\"Barista Ada made you a special drink! \");\n" +
        "System.out.println(\"She made you \" + typeOfDrink + \" with \" + numPackets + \" packets of sugar.\");\n" +
        "\n" +
        "if (numPackets == 0) {\n" +
        "    System.out.println(\"It's really bitter!\");\n" +
        "}\n" +
        "else if (numPackets == 1 || numPackets == 2) {\n" +
        "    System.out.println(\"Just right!\");\n" +
        "}\n" +
        "else if (numPackets >= 3) {\n" +
        "    System.out.println(\"How sweet!\");\n" +
        "}";
}

function submitLesson3() {
    let customer = "customer";
    let customers = [];
    for (let i = 0; i < 5; i++) {
        let id = customer + i;
        customers[i] = document.getElementById(id).value;
        if (customers[i] == null || customers[i] == "") {
            window.alert("Please provide valid input for all fields.");
            return;
        }
    }
    for (let j = 0; j < 5; j++) {
        let id = customer + j;
        cookies.set(id, encodeHTML(customers[j]));
    }
    window.location.href = "lesson3a.html";
}

function loadLesson3a() {
    let customer = "customer";
    let customers = [];
    for (let i = 0; i < 5; i++) {
        let id = customer + i;
        customers[i] = cookies.get(id);
    }

    document.getElementById("lesson3a").innerHTML = "First, please take " + customers[0] + "\'s order. Next, serve " + customers[1] + ", then get to " + customers[2] + ", followed by " + customers[3] + ". Finally, please finish the order for " + customers[4] + ". Good luck! You're doing great!";
}

function loadLesson3b() {
    let customer = "customer";
    let customers = [];
    for (let i = 0; i < 5; i++) {
        let id = customer + i;
        customers[i] = cookies.get(id);
    }

    document.getElementById("lesson3code").innerHTML =
        "String[] customers = {\n" +
        "    \"" + customers[0] + "\",\n" +
        "    \"" + customers[1] + "\",\n" +
        "    \"" + customers[2] + "\",\n" +
        "    \"" + customers[3] + "\",\n" +
        "    \"" + customers[4] + "\"\n" +
        "};\n" +
        "System.out.println(\"Barista Bill has orders for you to fill!\");\n" +
        "System.out.println(\"First, please take an order for \" + customers[0] + \n" +
        "    \". Next, serve \" + customers[1] + \", then get to \" + customers[2] + \n" +
        "    \", followed by \" + customers[3] + \n" +
        "    \". Finally, please finish the order for \" + customers[4] + \n" +
        "    \". Good luck! You're doing great!\");";
}

function submitLesson4() {
    let amountMoreCups = document.getElementById("amountMoreCups").value;
    if (amountMoreCups == null || amountMoreCups == "" || parseInt(amountMoreCups, 10) < 0 || parseInt(amountMoreCups, 10) > 536870911) {
        window.alert("Please provide valid input for all fields.");
    } else {
        cookies.set("amountMoreCups", encodeHTML(amountMoreCups));

        window.location.href = "lesson4a.html";
    }
}

function loadLesson4a() {
    let lesson = "lesson4a";
    let amount = 2;
    let amountMoreCups = cookies.get("amountMoreCups");
    for (let i = 0; i < 5; i++) {
        let id = lesson + i;
        document.getElementById(id).innerHTML = "Customer #" + (i + 1) + " ordered " + amount + " cups of coffee."
        amount += parseInt(amountMoreCups, 10);
    }
}

function loadLesson4b() {
    let amountMoreCups = cookies.get("amountMoreCups");
    document.getElementById("lesson4code").innerHTML =
        "int amountMoreCups = " + amountMoreCups + ";\n" +
        "int numberOfCustomers = customers.size();\n" +
        "int numberOfCups = 2;\n" +
        "int customerServed = 1;\n" +
        "while(customersServed &lt; numberOfCustomers + 1) {\n" +
        "    System.out.println(\"Customer #\" + customerServed + \" ordered \" + numberOfCups + \" cups of coffee.\");\n" +
        "    numberOfCups = numberOfCups + amountMoreCups;\n" +
        "    customerServed = customerServed + 1;\n" +
        "}";
}
