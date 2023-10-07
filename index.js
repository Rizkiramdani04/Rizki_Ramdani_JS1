 // contoh nilai if//
 
 let nilai = 12;
 if(nilai < 20){
     console.log(`nilai ini adalah ${nilai}`)
 }
 //Penutup if//

 // pembuka else//
 let nilai1 = 69;
 if(nilai1 > 70){
     console.log(`Kamu Bisa Melakukan Pembelajaran kedepannya dengan Nilai ${nilai}`)
 }else{
     console.log(`Kamu bisa mengulangi di tahun depan karena  nilai kamu sekarang ${nilai1}`);
 }
 //Penutup else//
 //pembuka if else//
 let ipk = 3.40
 if(ipk >3.45){
     console.log(`Kamu Lulus dengan nilai yang bagus dengan ${ipk}`)
 }else if(ipk >3.00){
     console.log(`Kamu lulus dengan nilai yang cukup ${ipk} selalu tingkatkan nilai yang kurang`)
 }else{
    console.log(`Nilai kamu masih kurang coba lagi di tahun depan`)
};
 //Penutup if else//

  //pembuka nested if//
  let nilaiUjian = 90;
  let nilaiAbsensi = 80;
  if(nilaiUjian >80){
     if(nilaiAbsensi >= 80){
         console.log(`Kamu Berhasil lulus dengan nilai ujian ${nilaiUjian} dan Nilai Absensi ${nilaiAbsensi} Selamat Melanjutkan kedepanya`);
     }
  }
  else{
     console.log(`Kamu Masih Belum Bisa Lulus Karena Nilai Ujian ${nilaiUjian} dan Nilai Absensi ${nilaiAbsensi} Terus Belajar`);
  }
  //Penutup nested if//
  //pembuka swich case//
  let uang = 3;
  
  switch(uang){
     case 1:
         console.log (`kamu memiliki uang bisa untuk menikah di gedung mewah `);
         break
     case 2:
         console.log(`Kamu memiliki uang bisa untuk menikah dirumah saja`);
         break
     case 3:
         console.log(`Sabar keknya tahun depan kamu bisa nikah`);
         break
     default:
         console.log(`Cari dulu pasangan jang terburu buru-buru`)
  }
  //Penutup switch//

  //pembukafor statement//
  for(let a=1; a <= 5; a++){
     console.log(`Nilai muncul ${a}`);
  }
  //Penutup for//
 //pembuka for in statement//
  const nilaiUas = { a: 90, b: 80, c: 70 };

  for (let nilai in nilaiUas) {
  console.log(`nilai ${nilai} = ${nilaiUas[nilai]}`);
  }
  //Penutup for in//
  
  //pembuka for of statement//
  const namaMentor = ["Syarif","Reza","Aulia"];
  for (const nama of namaMentor) {
     console.log(`Nama Mentor Di Infinite Learning diantaranya kak ${nama}`);   
  }
  //Penutup for of//
  //pembuka while//
  let number =1;
  while(number < 3){
     console.log(`nilai ${number}`)
     number++;   
  }
  //Penutup while//
  //pembuka do while//
  let angka=1;
  do{
     console.log(`nilai saya sekarang ${angka}`)
     angka++;     
  }while( angka<=4)
  //Penutup do while//


  //pembuka function//
  function namaSaya(){
     console.log(`Perkenalkan Nama Saya Rizki Ramdani Saya Berusia 20 Tahun`);
  }
  namaSaya();
  //Penutup function//
 
