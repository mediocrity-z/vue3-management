export interface DriverType {
    className?: string,
    animate?: boolean, // Whether to animate or not
    opacity?: number, // Background opacity (0 means only popovers and without overlay)
    padding?: number, // Distance of element from around the edges
    allowClose?: boolean, // Whether the click on overlay should close or not
    overlayClickNext?: boolean, // Whether the click on overlay should move next
    doneBtnText?: string, // Text on the final button
    closeBtnText?: string, // Text on the close button for this step
    stageBackground?: string, // Background color for the staged behind highlighted element
    nextBtnText?: string, // Next button text for this step
    prevBtnText?: string, // Previous button text for this step
}