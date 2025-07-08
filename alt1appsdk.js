
window.alt1Base = true;
(function(){
    if(typeof alt1 === "undefined"){
        window.alt1 = {};
    }
    alt1.identifyApp = function(id, name){
        if(typeof alt1 !== "undefined" && typeof window.__alt1AppId === "undefined"){
            window.__alt1AppId = id;
            document.title = name;
            console.log("App identified:", id);
        }
    };
})();
