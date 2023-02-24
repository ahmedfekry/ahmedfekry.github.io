const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;

function changeTabPanel(e) {
    const targetTab = e.target;

    let tabContainer;
    let targetPanel;
    let targetImage;

    targetPanel = targetTab.getAttribute("aria-controls");
    targetImage = targetTab.getAttribute("data-image");
    tabContainer = targetTab.parentNode;
    
    const mainContainer = tabContainer.parentNode.parentNode;
    
    tabContainer
    .querySelector('[aria-selected="true"]').classList.remove('active')
    
    tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);
    
    targetTab.setAttribute("aria-selected", true);
    targetTab.classList.add('active');
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    
    hideContent(mainContainer, 'img[class="img-fluid"]');
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