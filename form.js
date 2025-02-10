// personal info
let userName = document.getElementById('name');
let title = document.getElementById('title');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let address = document.getElementById('address');
let pic = document.getElementById('pic');
// education
let institute = document.getElementById('institute');
let year = document.getElementById('year');
let result = document.getElementById('result');
let institute2 = document.getElementById('institute2');
let year2 = document.getElementById('year2');
let result2 = document.getElementById('result2');
// skills
let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let skill3 = document.getElementById('skill3');
let skill4 = document.getElementById('skill4');
// languages
let lng1 = document.getElementById('lng1');
let lng2 = document.getElementById('lng2');
// work eperience
let company = document.getElementById('company');
let designation = document.getElementById('designation');
let stYear = document.getElementById('st-year');
let endYear = document.getElementById('end-year');
let job1Des = document.getElementById('job1-des');
let company2 = document.getElementById('company2');
let designation2 = document.getElementById('designation2');
let stYear2 = document.getElementById('st-year2');
let endYear2 = document.getElementById('end-year2');
let job2Des = document.getElementById('job2-des');
// certifications
let certificate1 = document.getElementById('certificate1');
let certificate2 = document.getElementById('certificate2');
let certificate3 = document.getElementById('certificate3');
// ------------------------------------------- *******--------------------------------------------------------
let submitbtn = document.getElementById('btn');
let form = document.getElementById('form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('title', title.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('institute', institute.value);
    localStorage.setItem('year', year.value);
    localStorage.setItem('result', result.value);
    localStorage.setItem('institute2', institute2.value);
    localStorage.setItem('year2', year2.value);
    localStorage.setItem('result2', result2.value);
    localStorage.setItem('skill1', skill1.value);
    localStorage.setItem('skill2', skill2.value);
    localStorage.setItem('skill3', skill3.value);
    localStorage.setItem('skill4', skill4.value);
    localStorage.setItem('lng1', lng1.value);
    localStorage.setItem('lng2', lng2.value);
    localStorage.setItem('company', company.value);
    localStorage.setItem('designation', designation.value);
    localStorage.setItem('stYear', stYear.value);
    localStorage.setItem('endYear', endYear.value);
    localStorage.setItem('job1Des', job1Des.value);
    localStorage.setItem('company2', company2.value);
    localStorage.setItem('designation2', designation2.value);
    localStorage.setItem('stYear2', stYear2.value);
    localStorage.setItem('endYear2', endYear2.value);
    localStorage.setItem('job2Des', job2Des.value);
    localStorage.setItem('certificate1', certificate1.value);
    localStorage.setItem('certificate2', certificate2.value);
    localStorage.setItem('certificate3', certificate3.value);
    alert('Data saved successfully');
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImage = reader.result;
            localStorage.setItem("profile_pic", textImage);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    // window.location.href = '/hackathon-resume/milestone-3/resume.html';
    window.location.href = 'my-resume/user-resume.html';
    window.location.href = '/my-resume/user-resume.html';
});
