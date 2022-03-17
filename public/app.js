// Pisahkan File React JS ke dalam folder Src agar bisa di compile dengan Babel JS
const root = document.querySelector('#root'); // React JS returnnya = Objek Literal

const h1 = React.createElement('h1', {
  children: 'My First React App!',
  className: 'mt-10 font-bold text-center text-3xl'
});
const h2 = React.createElement('p', {
  children: 'Collaborate with Tailwind CSS',
  className: 'mb-5 mt-2 text-center italic'
}); // Me-render 2 Element dengan nested Element

const p1 = React.createElement('p', {
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nemo voluptatibus quia, nam earum mollitia exercitationem possimus consectetur cum cupiditate quae. Debitis nulla vitae fuga porro ipsam nemo, vero delectus!',
  className: 'text-justify mb-5'
});
const p2 = React.createElement('p', {
  children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam rem minima provident, quae asperiores alias quam eum porro neque voluptatum deleniti ipsum saepe? Possimus incidunt accusantium quaerat et at explicabo nobis nostrum fugit nihil est. Ad deleniti, possimus, quibusdam doloribus autem laudantium eos soluta veniam commodi dolor tenetur dolorem consequuntur!',
  className: 'text-justify'
}); // Menggunakan Jsx dengan Compiler BabelJS (standalone)

const babelJS = /*#__PURE__*/React.createElement("p", {
  className: "text-justify mb-10 mt-4"
}, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, corrupti? Necessitatibus dolores odit facere quod. Omnis pariatur optio asperiores odit nisi dolorem nesciunt consequatur perferendis doloremque provident earum molestiae quidem suscipit dolore officiis, saepe repudiandae, ratione a eveniet tempore similique, id quaerat laborum quisquam. Sed voluptate quia labore officiis ut."); // Embed Variabel di dalam Jsx

const name = 'Richard'; // Embed value di Props tidak memakai tanda kutip apapun

const className = 'text-2xl mb-4 font-semibold';
const greet = /*#__PURE__*/React.createElement("p", {
  className: className
}, "Hello ", name, "!"); // Embed Img ke dalam Jsx (Wajib memakai Sub closing Tag)

const image = /*#__PURE__*/React.createElement("img", {
  src: "https://source.unsplash.com/1080x720/?Technology",
  alt: "Image Technology",
  className: "mb-10 rounded-3xl shadow-lg"
}); // Belajar React Component 
// Bikin Argumennya dengan props terus manggilnya sama kayak object

function Halo(props) {
  return /*#__PURE__*/React.createElement("p", {
    className: props.class
  }, "Sedang Belajar ", /*#__PURE__*/React.createElement("b", null, props.name));
}

function time() {
  return /*#__PURE__*/React.createElement("p", {
    className: "my-3 text-center font-semibold"
  }, new Date().toLocaleTimeString());
}

const item1 = /*#__PURE__*/React.createElement("div", {
  className: "box mt-5 mx-auto rounded-3xl"
});

function clickMe(msg) {
  alert(msg);
} //Belajar React Event Handling


const btn1 = /*#__PURE__*/React.createElement("button", {
  onClick: clickMe.bind(this, 'ZONK!'),
  className: "w-auto h-auto block py-2 px-5 bg-sky-500 mx-auto my-5 rounded-3xl text-white font-bold shadow-lg hover:bg-sky-600 hover:-translate-y-2 focus:ring focus:ring-sky-300 transition duration-500"
}, "Tweet"); // Belajar React State (App Counter)

function Counter() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center my-5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    },
    className: "w-auto h-auto py-auto px-5 bg-teal-500 rounded-3xl shadow-lg hover:bg-teal-300 transition duration-300"
  }, "Kurang"), /*#__PURE__*/React.createElement("h3", {
    className: "mx-5 text-2xl font-bold"
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    },
    className: "w-auto h-auto py-auto px-5 bg-teal-500 rounded-3xl shadow-lg hover:bg-teal-300 transition duration-300"
  }, "Tambah"));
} //TODO React Component Lifecycle memakai React.useEffect()
//TODO untuk memantau perubahan dari state apapun di dalam sebuah function
//TODO Bisa diatur dengan menggunakan parameter ke-2 [Array] bisa juga dibuat Empty Array
//TODO Video ada di part 21 - 23  
// React.useEffect(function () {
//     console.log('React Use Effect');
// });
// Conditional Rendering


function App() {
  const [login, setLogin] = React.useState(false);

  if (login) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
      className: "text-3xl mb-3"
    }, "Sudah Login"), /*#__PURE__*/React.createElement("button", {
      className: "px-5 py-2 text-white font-bold rounded-3xl bg-sky-500 hover:bg-sky-600 transition duration-500",
      onClick: function () {
        setLogin(false);
      }
    }, "Logout"));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl mb-3"
  }, "Belum Login"), /*#__PURE__*/React.createElement("button", {
    className: "px-5 py-2 text-white font-bold rounded-3xl bg-sky-500 hover:bg-sky-600 transition duration-500",
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
} // Form React


function CobaForm() {
  // const namaRef = React.useRef(null); Pake Cara Ref
  const [nama, setNama] = React.useState('');

  function formSubmit(event) {
    event.preventDefault(); // const nama = namaRef.current.value;

    if (nama == null || nama === false) {
      console.log('Nama Kamu Belum diisi');
    } else {
      console.log(`Nama kamu ${nama}`);
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: "bg-white shadow-md rounded-2xl max-w-lg mt-10 px-8 pt-6 pb-8 mb-4",
    onSubmit: formSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    for: ""
  }, "Nama : "), /*#__PURE__*/React.createElement("input", {
    className: "shadow appearance-none border border-slate-500 focus:border-sky-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline transition duration-300",
    type: "text",
    name: "nama"
    /** 
    ref = { namaRef } Ubah Reference nya disini
    */
    ,
    onChange: function (event) {
      setNama(event.target.value);
    }
    /** Disini kita menggunakan Controlled Component*/

  })), /*#__PURE__*/React.createElement("button", {
    className: "bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline transition duration-500",
    type: "submit"
  }, "Submit")));
}

function tampilkan() {
  // Dibungkus dengan 1 Parent
  const element = React.createElement('div', {
    className: 'container p-5 max-w-full md:max-w-2xl md:mx-auto'
  }, // Nested Element React JS
  h1, h2, image, p1, p2, babelJS, greet, React.createElement('li', null, 'Apple'), React.createElement('li', null, 'Orange'), React.createElement('li', null, 'Grape'), /*#__PURE__*/React.createElement(Halo, {
    name: "React Component",
    class: "mt-10 text-center text-2xl text-slate-800"
  }), time(), item1, btn1, /*#__PURE__*/React.createElement(Counter, null), /*#__PURE__*/React.createElement(App, null), /*#__PURE__*/React.createElement(CobaForm, null), // Buat Scroll jauh ke bawah
  React.createElement('div', {
    className: "mb-72"
  }));
  ReactDOM.render(element, root);
}

;
setInterval(function () {
  tampilkan();
}, 1000);