const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
    
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
// function changeTabFocus(e) {
//     const keydownLeft = 37;
//     const keydownRight = 39;
    
//     if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
//         tabs[tabFocus].setAttribute("tabindex", -1);
//     }
    
//     if (e.keyCode === keydownRight) {
//         tabFocus++;
//         if (tabFocus >= tabs.length) {
//             tabFocus = 0;
//         }
//     }
    
//     if (e.keyCode === keydownLeft) {
//         tabFocus--;
//         if (tabFocus < 0) {
//             tabFocus = tabs.length - 1;
//         }
//     }
    
//     tabs[tabFocus].setAttribute("tabindex", 0);
//     tabs[tabFocus].focus();
// }


function changeTabPanel(e) {
    const targetTab = e.target;

    
    let tabContainer;
    let targetPanel;
    let targetImage;
    if(targetTab.nodeName == 'A'){
        targetPanel = targetTab.parentNode.getAttribute("aria-controls");
        targetImage = targetTab.parentNode.getAttribute("data-image");
        tabContainer = targetTab.parentNode.parentNode;
    }else{
        targetPanel = targetTab.getAttribute("aria-controls");
        targetImage = targetTab.getAttribute("data-image");
        tabContainer = targetTab.parentNode;
    }
    
    const mainContainer = tabContainer.parentNode.parentNode;
    
    console.log(mainContainer);
    
    tabContainer
    .querySelector('[aria-selected="true"]').firstElementChild.classList.remove('active');
    
    tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);
    
    if(targetTab.nodeName == 'A'){
        targetTab.parentNode.setAttribute("aria-selected", true);
    }else{
        targetTab.setAttribute("aria-selected", true);
    }
    tabContainer
    .querySelector('[aria-selected="true"]').firstElementChild.classList.add('active')

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    
    hideContent(mainContainer, 'img');
    showContent(mainContainer, [`#${targetImage}`]);
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
     parent.querySelector(content).removeAttribute('hidden');
}