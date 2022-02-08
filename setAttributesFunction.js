function setAttributes(elementName, allAttributes) {
    for (let key in allAttributes) {
        elementName.setAttribute(key, allAttributes[key]);
    };
};