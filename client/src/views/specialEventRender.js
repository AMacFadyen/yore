var SpecialEventRender = function(eventQueue){
  this.render(eventQueue);
}

var currentEvent = 0;

SpecialEventRender.prototype = {

  render: function(eventQueue){
    var modal = document.getElementById("special-event-invisible");
    modal.innerHTML = "";
    modal.id = "special-event-display";
    var content = document.createElement("div");
    content.id = "special-event-content";
    modal.appendChild(content);
    if(eventQueue[currentEvent].imgUrl != null || undefined){
      renderImg(content, eventQueue[currentEvent].imgUrl);
    }
    if(eventQueue[currentEvent].member != null || undefined){
      renderMemberInfo(content, eventQueue[currentEvent].member);
    }

    var text = document.createElement("p");
    text.innerText = eventQueue[currentEvent].eventText;
    content.appendChild(text);

    var close = document.createElement("button");
    close.id = "special-event-close";
    close.innerText = "Ok";
    close.addEventListener("click", function(){
      modal.id = "special-event-invisible";
    });
    content.appendChild(close);
  }

}

var renderImg = function(content, imgUrl){
  eventImg = document.createElement("img");
  eventImg.src = imgUrl;
  eventImg.classList += "family-sprite";
  content.appendChild(eventImg);
}

var renderMemberInfo = function(content, member){
  var name = document.createElement("p");
  name.innerText = member.name;
  var age = document.createElement("p");
  age.innerText = "Age: " + member.age;
  var health = document.createElement("p");
  health.innerText = "Health: " + member.health;
  content.appendChild(name);
  content.appendChild(age);
  content.appendChild(health);
}

module.exports = SpecialEventRender;
