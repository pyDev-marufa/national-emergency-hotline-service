const favCountrElemnt = document.getElementById('favorite-counter');
const coinCountrElemnt = document.getElementById('coin-counter');
const copyCountrElemnt = document.getElementById('copy-counter');
const callHistoryContainer = document.getElementById('history-list-container');
const clearButton = document.getElementById('btn-clear');
const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('icons-counter-container');



const favBtns = document.querySelectorAll('.fav-icon');
const callButtons = document.querySelectorAll('button[id $= "-btn-call"]');
const copyButtons = document.querySelectorAll('button[id $= "-btn-copy"]');


let favoriteCount = 0;
let coinCount = 100;
let copyCount = 0;


function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}


for (const button of favBtns) {
    button.addEventListener('click', () => {
        favoriteCount++;
        favCountrElemnt.textContent = favoriteCount;
    });
}

for (const button of callButtons) {
    button.addEventListener('click', () => {
        if (coinCount > 0) {
            coinCount -= 20;
            coinCountrElemnt.textContent = coinCount;


            const servicePrefix = button.id.replace('-btn-call', '');
            const serviceNameElement = document.getElementById(`${servicePrefix}-service-name`);
            const serviceNumberElement = document.getElementById(`${servicePrefix}-service-number`);


            const serviceName = serviceNameElement.textContent.replace(/\s+/g, ' ').trim();
            const serviceNumber = serviceNumberElement.textContent.replace(/\s+/g, ' ').trim();

            const clickTime = getCurrentTime();

            const callHistoryItemHTML = `
                        <div class="tertiary-bg-color font-hind-madurai-regular flex justify-between items-center p-4 rounded-lg gap-4">

                            <div class = "space-y-1">
                                <p >${serviceName}</p>
                                <p >${serviceNumber}</p>
                            </div>

                            <p >${clickTime}</p>
                        </div>
        `;


            callHistoryContainer.insertAdjacentHTML('afterbegin', callHistoryItemHTML);

            alert(`Calling ${serviceName} ${serviceNumber}`);

        } else {
            alert("আপনার পর্যাপ্ত কয়েন নেই। কল করার জন্য কমপক্ষে ২০টি কয়েন লাগবে।");
        }



    });
}



for (const button of copyButtons) {
    button.addEventListener('click', () => {
        copyCount++;
        copyCountrElemnt.textContent = copyCount;



        const servicePrefix = button.id.replace('-btn-copy', '');
        const serviceNumberElement = document.getElementById(`${servicePrefix}-service-number`);
        const numberToCopy = serviceNumberElement.textContent.trim();


        navigator.clipboard.writeText(numberToCopy).then(() => {
            alert(`কপি সংখ্যা বৃদ্ধি করুন`);
        }).catch(err =>{
            console.error('could not copy text', err);
        });

    });
}


clearButton.addEventListener('click', () => {
    callHistoryContainer.innerHTML = '';
});








// Mobile responsive 
const hambugerIcon = document.getElementById('menu-btn');
const closeIcon = document.getElementById('icon-close');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hambugerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

