let currentScene =1; // starting scene

function changeScene (choice) {
    if (currentScene === 1) {
        if (choice === 1) {
            currentScene = 2;
        } else {
            currentScene = 3;
        }
    } else if (currentScene === 2) {
        if (choice === 1) {
            currentScene = 4;
        } else {
        currentScene = 5;
        } 
    } else if (currentScene === 3) {
        if (choice === 1) {
            currentScene = 6;
        } else {
            currentScene = 7;
        }
    } else if (currentScene === 6){
        if (choice === 1) {
            currentScene = 8;
        } 
    } else {
        alert ("The Story has ended. Refresh to start again.");
        return;
        
}
updateScene();

}

function updateScene(){
    let sceneData = {
        1: {message: "Your journey begins at a fork in the road", image: "Scene1.png"},
        2: {message: "You have arrived at a cute little house in the woods.", image: "Scene2.png"},
        3: {message: "SCENE 3: You are standing in a bridge overlooking a peaceful stream", image: "Scene3.jpeg"},
        4: {message: "Witch Window", image: "Scene4.png"},
        5: {message: "Sorry, you just became part of the witch's stew.", image: "Scene5.png"},
        6: {message: "Sorry, a troll lives on the other side of the bridge and you " + "just became his lunch.", image: "Scene6.png"},
        7: {message: "Your stare is interrupted by the arrival of a huge troll.", image: "Scene7.png"},
        8: {message: "To be continued", image: "Scene8.jpeg"},
    };

    document.getElementById("sceneMessage").innerText = sceneData[currentScene].message;

    document.getElementById("sceneImage").src = sceneData [currentScene].image;
}