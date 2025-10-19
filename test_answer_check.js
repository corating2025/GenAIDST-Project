// Test function for answer checking functionality
function testAnswerCheck() {
    console.log('Testing answer checking functionality...');
    
    // Log all drop zones
    const dropZones = document.querySelectorAll('.drop-zone');
    console.log('Drop zones found:', dropZones.length);
    dropZones.forEach((zone, index) => {
        console.log(`Drop zone ${index}:`, zone.id, zone.dataset.correct);
    });
    
    // Log all draggable elements
    const draggables = document.querySelectorAll('.draggable');
    console.log('Draggable elements found:', draggables.length);
    draggables.forEach((element, index) => {
        console.log(`Draggable ${index}:`, element.id, element.textContent.trim());
    });
    
    // Log correct IDs
    const correctIds = {
        'drop-zone-1': 'drag-item-1',
        'drop-zone-2': 'drag-item-2',
        'drop-zone-3': 'drag-item-3'
    };
    console.log('Correct mappings:', correctIds);
    
    // Log feedback elements
    const feedbackElements = document.querySelectorAll('.feedback-message');
    console.log('Feedback elements found:', feedbackElements.length);
    
    console.log('Test completed. Check console for details.');
}

// Auto-run test when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testAnswerCheck);
} else {
    testAnswerCheck();
}