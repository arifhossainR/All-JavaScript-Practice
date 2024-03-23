const milestoneWholeObject = JSON.parse(jsonData).data;

function loadMilestone(){
    const milestones = document.querySelector(".milestones");

    milestones.innerHTML = `${milestoneWholeObject.map(function(milestone){
        return `<div class="milestone border-b" id="${milestone._id}">
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${milestone._id})" /></div>
                        <div onclick="openMilestone(this, ${milestone._id})">
                            <p>
                                ${milestone.name}
                                <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                    </div>
                    <div class="hidden_panel">
                        ${milestone.modules.map(function(module){
                            return `<div class="module border-b">
                                        <p>${module.name}</p>
                                    </div>`;
                        }).join("")}
                    </div>
                </div>`;
    }).join("")}`;
}

function openMilestone(milestoneElement, id){
    const hiddenPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");

    // remove previous show class if any
    if(!hiddenPanel.classList.contains("show") && shownPanel){
        shownPanel.classList.remove("show");
    }
    hiddenPanel.classList.toggle("show"); // toggle current click one

    // remove previous active class if any
    const active = document.querySelector(".active");
    if(!milestoneElement.classList.contains("active") && active){
        active.classList.remove("active");
    }
    milestoneElement.classList.toggle("active"); // toggle current click one


    showMilestoneImgAndDescription(id);
}

function showMilestoneImgAndDescription(id){
    const milestoneImg = document.querySelector(".milestoneImage");
    const title = document.querySelector(".title");
    const descrption = document.querySelector(".details");

    milestoneImg.style.opacity = "0";
    milestoneImg.src = milestoneWholeObject[id].image;
    title.innerHTML = milestoneWholeObject[id].name;
    descrption.innerText = milestoneWholeObject[id].description;
}

const milestoneImg = document.querySelector(".milestoneImage");
milestoneImg.onload = function(){
    this.style.opacity = "1";
}

function markMileStone(checkbox, id){
    const milestones = document.querySelector(".milestones");
    const doneList = document.querySelector(".doneList");

    const item = document.getElementById(id);

    if(checkbox.checked){
        // mark as done
        milestones.removeChild(item);
        doneList.appendChild(item);
    }else{
        // back to main list
        milestones.appendChild(item);
        doneList.removeChild(item);
    }
}

loadMilestone();