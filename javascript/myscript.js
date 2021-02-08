var app = new Vue ({
  el: "#app",
  data: {
    inputMessaggio: "",
    inputSearch: "",
    indiceContattoAttivo: 0,
    lastOnline:"06/02/2021 00:00:00",
    contatti: [
      {
        nomeContatto: "Lorenzo",
        immagineContatto: "img/avatar_1.jpg",
        visibile: true,
        messaggiChat: [
          {
            testo: "concerto sabato sera?",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "ci sta la pandemia fesso",
            tipo: "receivedMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "ambè vero",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          }
        ],
      },
      {
        nomeContatto: "Matteo",
        immagineContatto: "img/avatar_2.jpg",
        visibile: true,
        messaggiChat: [
          {
            testo: "oh?",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "eh",
            tipo: "receivedMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "si?",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "no",
            tipo: "receivedMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "ok",
            tipo: "receivedMessage",
            timeInfo: "06/02/2021 00:00:00",
          }
        ]
      },
      {
        nomeContatto: "Emanuele",
        immagineContatto: "img/avatar_3.jpg",
        visibile: true,
        messaggiChat: [
          {
            testo: "sei sparito",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "lo so",
            tipo: "receivedMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "hai fatto i soldi?",
            tipo: "receivedMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "eh?",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "me pensavo",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          }
        ]
      },
      {
        nomeContatto: "Federico",
        immagineContatto: "img/avatar_4.jpg",
        visibile: true,
        messaggiChat: [
          {
            testo: "ma stai ancora in Danimarca",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "si",
            tipo: "receivedMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "fa freddo me sa",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "eh mezzo che sì",
            tipo: "receivedMessage",
            timeInfo: "06/02/2021 00:00:00",
          },
          {
            testo: "eh vedi",
            tipo: "sentMessage",
            timeInfo: "06/02/2021 00:00:00",
          }
        ]
      }
    ]
  },
  methods: {
    attivaContatto: function (indiceAttivo) {
      this.indiceContattoAttivo = indiceAttivo;
    },

    dataTime: function () {
      var today = new Date();
      var date = today.getDate()+' '+(today.getMonth()+1)+' '+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      return dateTime;
    },

    inviaMessaggio: function () {
      if (this.inputMessaggio != "")
      this.contatti[this.indiceContattoAttivo].messaggiChat.push({testo: this.inputMessaggio, tipo: "sentMessage", timeInfo: this.dataTime (), opzioniMessaggio: "eliminaMessaggioNo"});
      this.inputMessaggio = "";
      this.ritardoRisposta();
      this.scrollDown();
    },

    messaggioRisposta: function () {
      if (this.inputMessaggio != "")
      this.lastOnline = this.dataTime ();
      this.contatti[this.indiceContattoAttivo].messaggiChat.push({testo: "ok", tipo: "receivedMessage", timeInfo: this.dataTime (), opzioniMessaggio: "eliminaMessaggioNo"});
      this.scrollDown();
    },

    ritardoRisposta: function () {
      setTimeout (this.messaggioRisposta, 1000);
    },

    cercaChat: function(){
      this.contatti.forEach((elemento) => {
        let inputInserito = app.inputSearch;
        let nome = elemento.nomeContatto;

        inputInserito = inputInserito.toLowerCase();
        nome = nome.toLowerCase();

        if (nome.includes(inputInserito)) {
          elemento.visibile = true;
        } else {
          elemento.visibile = false;
        }
      });
    },

    deleteMessage: function (i) {
      this.contatti[this.indiceContattoAttivo].messaggiChat.splice(i, 1);
    },

    scrollDown: function() {
      setTimeout(function(){
        let chat = document.getElementById("spazioChat");
        chat.scrollTop = chat.scrollHeight;
      }, 1);
    }

  }
});
