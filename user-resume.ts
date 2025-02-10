window.addEventListener('load', () => {
    let userName = localStorage.getItem('userName');
    let title = localStorage.getItem('title');
    let phone = localStorage.getItem('phone');
    let email = localStorage.getItem('email');
    let address = localStorage.getItem('address');
    let profile_pic = localStorage.getItem('profile_pic')
    let institute = localStorage.getItem('institute');
    let year = localStorage.getItem('year');
    let result = localStorage.getItem('result');
    let institute2 = localStorage.getItem('institute2');
    let year2 = localStorage.getItem('year2');
    let result2 = localStorage.getItem('result2');
    let skill1 = localStorage.getItem('skill1');
    let skill2 = localStorage.getItem('skill2');
    let skill3 = localStorage.getItem('skill3');
    let skill4 = localStorage.getItem('skill4');
    let lng1 = localStorage.getItem('lng1');
    let lng2 = localStorage.getItem('lng2');
    let company = localStorage.getItem('company');
    let designation = localStorage.getItem('designation');
    let stYear = localStorage.getItem('stYear');
    let endYear = localStorage.getItem('endYear');
    let job1Des = localStorage.getItem('job1Des');
    let company2 = localStorage.getItem('company2');
    let designation2 = localStorage.getItem('designation2');
    let stYear2 = localStorage.getItem('stYear2');
    let endYear2 = localStorage.getItem('endYear2');
    let job2Des = localStorage.getItem('job2Des');
    let certificate1 = localStorage.getItem('certificate1');
    let certificate2 = localStorage.getItem('certificate2');
    let certificate3 = localStorage.getItem('certificate3');


    let resName: any = document.getElementById('resName');
    resName.textContent = userName;
    let resumeTitle: any = document.getElementById('resumeTitle');
    resumeTitle.textContent = title

    let resPhone:any = document.getElementById('resPhone');
    resPhone.textContent = phone
    let resEmail:any = document.getElementById('resEmail');
    resEmail.textContent = email
    let resAddress:any = document.getElementById('resAddress');
    resAddress.textContent = address

    let resPic:any = document.getElementById('resPic');
    resPic.src = profile_pic

    let resInstitute:any = document.getElementById('resInstitute');
    resInstitute.textContent = institute
    let resYear:any = document.getElementById('resYear');
    resYear.textContent = year
    let resResult:any = document.getElementById('resResult')
    resResult.textContent = result
    let resInstitute2:any = document.getElementById('resInstitute2');
    resInstitute2.textContent = institute2
    let resYear2:any = document.getElementById('resYear2');
    resYear2.textContent = year2
    let resResult2:any = document.getElementById('resResult2')
    resResult2.textContent = result2


    let resSkil1: any = document.getElementById('resSkill1')
    resSkil1.textContent = skill1
    let resSkil2: any = document.getElementById('resSkill2')
    resSkil2.textContent = skill2
    let resSkil3: any = document.getElementById('resSkill3')
    resSkil3.textContent = skill3
    let resSkil4: any = document.getElementById('resSkill4')
    resSkil4.textContent = skill4
    
    let resLng1:any = document.getElementById('resLng1');
    resLng1.textContent = lng1
    let resLng2:any = document.getElementById('resLng2');
    resLng2.textContent = lng2

    let resCompany:any = document.getElementById('resCompany');
    resCompany.textContent = company
    let resdesgination:any = document.getElementById('resDesignation');
    resdesgination.textContent = designation
    let resStYear:any = document.getElementById('resStYear');
    resStYear.textContent = stYear
    let resEndYear:any = document.getElementById('resEndYear');
    resEndYear.textContent = endYear
    let resDes:any = document.getElementById('resDes');
    resDes.textContent = job1Des

    let resCompany2:any = document.getElementById('resCompany2');
    resCompany2.textContent = company2
    let resdesgination2:any = document.getElementById('resDesignation2');
    resdesgination2.textContent = designation2
    let resStYear2:any = document.getElementById('resStYear2');
    resStYear2.textContent = stYear2
    let resEndYear2:any = document.getElementById('resEndYear2');
    resEndYear2.textContent = endYear2
    let resDes2:any = document.getElementById('resDes2');
    resDes2.textContent = job2Des

    let resCertificate1:any = document.getElementById('resCertificate1');
    resCertificate1.textContent = certificate1
    let resCertificate2:any = document.getElementById('resCertificate2');
    resCertificate2.textContent = certificate2
    let resCertificate3:any = document.getElementById('resCertificate3');
    resCertificate3.textContent = certificate3

});



let prnt_btn = document.getElementById('prnt-btn')

prnt_btn?.addEventListener('click' , ()=>{
    window.print();
})

let edit_btn = document.getElementById('edit-btn')

edit_btn?.addEventListener("click" , () =>{
    window.history.back()
})
 let anc = document.getElementById('anc')
let shr_btn = document.getElementById('shr-btn')
























