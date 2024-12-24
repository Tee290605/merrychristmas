 const div1 = document.querySelector('.div1');
 const clickme = document.querySelector('.clickme');
 const hand = document.querySelector('.hand');
 const textElement = document.querySelector('.letter');
    const trees = document.querySelectorAll('.Tree img');
    const moon = document.querySelector('.moon');
    const cardText = document.querySelector('.inner');
    const loidan = document.querySelector('.loidan');
 if(clickme){
    clickme.addEventListener("click",function(){

        div1.classList.add('show');
        textElement.style.display = 'block'
        clickme.style.display = 'none';
        hand.style.display = 'none';
        trees.forEach(tree => {
          tree.style.display = 'none'; // Ẩn tất cả các cây
      });
     moon.style.display = 'none'
      loidan.style.display = 'none';
      

const message = textElement.innerText; // Lấy nội dung của h1
    
  textElement.innerText = ''; // Xóa nội dung để tạo hiệu ứng chữ chạy
    let index = 0;

    function typeWriter() {
      if (index < message.length) {
        textElement.innerText += message.charAt(index); // Thêm từng ký tự vào
        index++;
        setTimeout(typeWriter, 350); // Thực thi lại hàm sau mỗi 150ms
      }
    }
        typeWriter(); // Bắt đầu hiệu ứng chữ chạy


    textElement.addEventListener('click', function(){
      cards.forEach(card => {
        card.classList.add('show1');
    });
        cardText.classList.add('show3');
    
    })
    })
  }
  
 function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Vị trí ngang ngẫu nhiên
    particle.style.left = Math.random() * window.innerWidth + 'px';

    // Kích thước ngẫu nhiên
    const size = Math.random() * 5 + 5; // Kích thước từ 5px đến 10px
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Thời gian rơi ngẫu nhiên
    particle.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3s - 5s
    particle.style.animationDelay = Math.random() * 2 + 's'; // Độ trễ ngẫu nhiên (0s - 2s)

    // Thêm hạt vào màn hình
    document.body.appendChild(particle);

    // Xóa hạt sau khi hoàn thành animation
    setTimeout(() => {
      particle.remove();
    }, 5000); // Xóa sau 5 giây
  }

  // Tạo hạt mới mỗi 100ms
  setInterval(createParticle, 100);


  // Lấy phần tử thẻ
  const cards = document.querySelectorAll('.card');
  const cardinner = document.querySelector('.card-inner');
  const cardfront = document.querySelector('.card-front');
  // Lắng nghe sự kiện click trên mỗi thẻ
  cards.forEach(card => {
      card.addEventListener('click', function() {
          // Thêm hoặc gỡ lớp 'flip' để kích hoạt hiệu ứng lật
          card.classList.toggle('flip');
          card.classList.toggle('.move')
          cardfront.style.boxShadow = '0px 10px 20px rgb(202, 231, 242)'; 
          cardinner.style.boxShadow = '0px 10px 20px rgb(202, 231, 242)';
      });
  });

const dung = document.querySelector('.dung');
const sai = document.querySelector('.sai');

let a=0;
let isTimeoutTriggered = false;

sai.addEventListener('click', function() {

  a += 1;
  sai.style.transform = `scale(${1 + a*0.2})`;
  if(a%4==0){
    a=0;
    sai.style.display = 'none';
    loidan.innerText= 'Vui lòng sống thật với bản thân';
    dung.classList.toggle('clicked');
  };

});

dung.addEventListener('click', function(){
  loidan.innerText= 'Tui biết mà<3';
  sai.style.display = 'none';
  dung.style.display = 'none';
  dung.classList.remove('clicked')
  if (!isTimeoutTriggered) {  // Kiểm tra nếu setTimeout chưa được gọi
    isTimeoutTriggered = true;  // Đánh dấu đã gọi setTimeout

     setTimeout(function() {
    loidan.innerText = 'Theo bạn ai là người đẹp trai nhất!'; 
    loidan.style.color = 'darkblue'
  }, 2000); 
  setTimeout(function(){
    sai.style.display = 'block';
    sai.innerText = 'HIEUTHUHAI';
    dung.style.display = 'block';
    dung.innerText = 'Jack  J97';
  },3000);
  }
  if(a%4==0){
    if(dung.innerText == 'Jack  J97'){
      loidan.innerText = 'Đây là phẩn thưởng của trả lời cho câu lời đúng cảu bạn';
    clickme.style. visibility = 'visible';
    }
  }

 
})
