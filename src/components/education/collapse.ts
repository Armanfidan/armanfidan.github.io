// This is the important part!

function collapseSection(element: HTMLElement) {
    // get the height of the element's inner content, regardless of its actual size
    let sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    let elementTransition = element.style.transition;
    element.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
    });
}

function expandSection(element: HTMLElement) {
    let sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';
    let listener = function(e: TransitionEvent) {
        element.style.height = ''
    }
    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', listener);
    element.removeEventListener('transitionend', listener)
}

export {expandSection, collapseSection}