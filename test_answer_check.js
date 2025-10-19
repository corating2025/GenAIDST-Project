// 测试答案检查功能的脚本
console.log('Testing answer checking functionality...');

// 模拟在浏览器控制台中运行的测试
function testAnswerCheck() {
    // 检查drop zones数量
    const dropZones = document.querySelectorAll('#descriptions .drop-zone');
    console.log('Drop zones found:', dropZones.length);
    
    // 检查是否有拖拽的元素
    let correctCount = 0;
    dropZones.forEach((zone, index) => {
        const droppedEl = zone.querySelector('.draggable');
        const correctId = zone.dataset.correctId;
        const droppedId = droppedEl ? droppedEl.id : null;
        
        console.log(`Zone ${index}: correctId=${correctId}, droppedId=${droppedId}`);
        
        if (droppedEl && droppedEl.id === zone.dataset.correctId) {
            correctCount++;
        }
    });
    
    console.log('Correct count:', correctCount);
    
    // 检查elementsData是否可用
    if (typeof elementsData !== 'undefined') {
        console.log('elementsData length:', elementsData.length);
    } else {
        console.log('elementsData is not defined');
    }
    
    // 检查反馈元素
    const feedbackEl = document.getElementById('elements-feedback');
    if (feedbackEl) {
        console.log('Feedback element found');
        console.log('Current feedback text:', feedbackEl.textContent);
        console.log('Current feedback class:', feedbackEl.className);
    } else {
        console.log('Feedback element not found');
    }
    
    return {
        dropZonesCount: dropZones.length,
        correctCount: correctCount,
        elementsDataLength: typeof elementsData !== 'undefined' ? elementsData.length : 'undefined',
        feedbackExists: !!feedbackEl
    };
}