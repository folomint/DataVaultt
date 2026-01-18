function openPopup(){
document.getElementById('popup').style.display='flex';
}
function closePopup(){
document.getElementById('popup').style.display='none';
}

const names=[
"Amit","Rahul","Sana","Imran","Neha","Ravi","Pooja","Ali","Karan","Zoya",
"Arjun","Meena","Vikas","Nisha","Farhan","Kabir","Simran","Ayesha","Raj","Isha",
"Ankit","Reena","Mohit","Saba","Deepak","Kavya","Sunil","Rani","Sameer","Tara",
"Aditya","Komal","Arif","Geeta","Nitin","Zara","Manish","Priya","Salman","Ritu",
"Faizan","Sneha","Danish","Kajal","Yusuf","Anjali","Sohail","Ritika","Irfan","Pallavi"
];
let i=0;
setInterval(()=>{
const box=document.getElementById('liveBox');
box.innerText=names[i]+" withdrew ₹29 successfully";
box.style.display='block';
i=(i+1)%names.length;
setTimeout(()=>box.style.display='none',6000);
},10000);
