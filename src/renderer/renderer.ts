const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
const saveFileButton = document.getElementById('save-file') as HTMLButtonElement;
const loadFileButton = document.getElementById('load-file') as HTMLButtonElement;

// 保存文件
saveFileButton.addEventListener('click', async () => {
    const content = textarea.value;

    try {
        // 向主进程请求保存文件
        const response = await window.electronAPI.saveFile(content);
        alert(response);  // 提示用户文件保存路径
    } catch (error) {
        console.error('保存文件时发生错误：', error);
        alert('保存文件时发生错误！');
    }
});

// 读取文件
loadFileButton.addEventListener('click', async () => {
    try {
        // 向主进程请求读取文件内容
        const fileContent = await window.electronAPI.readFile();
        textarea.value = fileContent;  // 显示文件内容在 textarea 中
    } catch (error) {
        console.error('读取文件时发生错误：', error);
        alert('读取文件时发生错误！');
    }
});
