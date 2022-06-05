
        //===========anaToVori========
        function anaToVori(ana) {
          //=====invalid input condition=====
          if (typeof ana != "number") {
            return 'Please input a number';
          }
          let vori = ana / 16;
          return vori;
        }
  /*       const totalVori = anaToVori(144);
        // const totalVori = anaToVori('komol');
        console.log(totalVori); */

        //=======PandaCost==========

        function pandaCost(singara, somusa, jilapi) {
          //========price========
          const singaraCost = 7;
          const somusaCost = 10;
          const jilapiCost = 15;

          // cost calculations

          const totalSingaraPrice = singara * singaraCost;
          const totalSomusaPrice = somusa * somusaCost;
          const totaljilapiPrice = jilapi * jilapiCost;

          // final cost
      
          const totalPandaCost = totalSingaraPrice + totalSomusaPrice + totaljilapiPrice;

          if ( totalPandaCost <=50){
            return 'Total cost must be more than 50tk';
          }
          return totalPandaCost;
        
        }
   /*      const finalTotalCost = pandaCost(3, 2, 2);
        console.log(finalTotalCost); */

      
        //=========picnicBudget==========

        function picnicBudget(studentsNumber) {

          //=====invalid input condition=====

          if (typeof studentsNumber != "number") {
            return 'Please input Students number';
          }

          const first100StudentsBudget = 5000;
          const second100StudentsBudget = 4000;
          const restOfTheStudentsBudget = 3000;

          if (studentsNumber <= 100) {
            const budget = studentsNumber * first100StudentsBudget;
            return budget;
          } else if (studentsNumber <= 200) {
            const first100Students = 100 * first100StudentsBudget;
            const restStudents = studentsNumber - 100;
            const second100Students = restStudents * second100StudentsBudget;
            const totalbudget = first100Students + second100Students;
            return totalbudget;

          } else {
            const first100Students = 100 * first100StudentsBudget;
            const second100Students = 100 * second100StudentsBudget;
            const restStudents = studentsNumber - 200;
            const restBudget = restStudents * restOfTheStudentsBudget;
            const totalbudget = first100Students + second100Students + restBudget;
            return totalbudget;
          }
        }
       const students = picnicBudget(250);
        // const students = picnicBudget('komol');
        console.log(students); 
 
        //============oddFriend======

        function oddFriend(friends) {
     
          let oddName = friends[0];
          for (let i = 0; i < friends.length; i++) {
            const element = friends[i];
            if (oddName.length % 2 == 0) {
              oddName = element;
            }
          }
          if (typeof oddName != "string") {
            return 'OddName must be  in a name';
          }
          return oddName;
        }
        let oddFriendList = ['sajjad', 'Limu', 'soyeb', 'limon', "rasel", 'komol'];
        const getOddFriend = oddFriend(oddFriendList);
        console.log(getOddFriend);