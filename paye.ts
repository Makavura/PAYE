class Individual  {
    basicSalary: number;
    benefits: number;
    empName: string;
    pensionDeduction: number;
    PostPensionDeductionIncome: number;
    taxableIncome: number;
    employeeDeductionI: number;
    employeeDeductionII: number;
    pensionableEarnings: number;
    taxDeduction: number;
    NHIF: number;
    grossSalary: number;
    taxRate: number;
    personalRelief: number;
    taxPayable: number;
    carryHomePay: number;
  
    constructor(basicSalary: number, benefits: number, empName: string) {
      this.basicSalary = basicSalary;
      this.benefits = benefits;
      this.empName = empName
  
    }
  
    computeNSSFDeductible(){
        
      if (this.grossSalary <= 6000) {
          this.employeeDeductionI = 0.06 * this.grossSalary;
          this.employeeDeductionII = 0.06 * (this.grossSalary-6000);
          this.pensionDeduction = this.employeeDeductionI+this.employeeDeductionII;
          return this.pensionDeduction
      } else if (this.grossSalary > 6000 && this.grossSalary <= 18000){
          this.employeeDeductionI = 0.06 * 6000;
          this.employeeDeductionII = 0.06 * (this.grossSalary-6000);
          this.pensionDeduction = this.employeeDeductionI+this.employeeDeductionII;
          return this.pensionDeduction
      } else{
        this.employeeDeductionI = 0.06 * this.grossSalary;
        this.employeeDeductionII = 0.06 * this.grossSalary;
        this.pensionDeduction = this.employeeDeductionI+this.employeeDeductionII;
        return this.pensionDeduction
      }
    }

     computePostPensionDeductionIncome(){
         this.PostPensionDeductionIncome = this.basicSalary - this.pensionDeduction;
         return this.PostPensionDeductionIncome;
     } 

     computeTaxableIncome(){
         this.taxableIncome = this.PostPensionDeductionIncome + this.benefits
         return this.taxableIncome
     }

     computeGrossSalary(){
         this.grossSalary = this.basicSalary + this.benefits
         return this.grossSalary
     }

     computeTaxDeduction() {
          if (this.taxableIncome <= 12298) {
            this.taxRate = 0.1
            this.taxDeduction = this.taxableIncome*this.taxRate
            return this.taxDeduction
         } else if (this.taxableIncome >= 12298 && this.taxableIncome <= 23885) {
            this.taxRate = 0.15
            this.taxDeduction = this.taxableIncome*this.taxRate
            return this.taxDeduction
         } else if (this.taxableIncome >= 23886 && this.taxableIncome <= 35472) {
            this.taxRate = 0.20
            this.taxDeduction = this.taxableIncome*this.taxRate
            return this.taxDeduction
         }  else if (this.taxableIncome >= 35473 && this.taxableIncome <= 47059) {
            this.taxRate = 0.25
            this.taxDeduction = this.taxableIncome*this.taxRate
            return this.taxDeduction
         } else {
            this.taxRate = 0.30
            this.taxDeduction = this.taxableIncome*this.taxRate
            return this.taxDeduction
         }
        
     }

     computeTaxPayable(){
        this.personalRelief = 1408; 
        if (this.taxDeduction < this.personalRelief){
            this.taxPayable = 0  
            return this.taxPayable
        }else { 
         this.taxPayable = this.taxDeduction - this.personalRelief
         return this.taxPayable        
        }
         
     }

     computeNHIF(){
         if (this.grossSalary <= 5999) {
             this.NHIF = 150
             return this.NHIF
         } else if (this.grossSalary >= 6000 && this.grossSalary <= 7999) {
             this.NHIF = 300
             return this.NHIF
         } else if (this.grossSalary >= 8000 && this.grossSalary <= 11999) {
            this.NHIF = 400
            return this.NHIF
        } else if (this.grossSalary >= 12000 && this.grossSalary <= 14999) {
            this.NHIF = 500
            return this.NHIF
        } else if (this.grossSalary >= 15000 && this.grossSalary <= 19999) {
            this.NHIF = 600
            return this.NHIF
        } else if (this.grossSalary >= 20000 && this.grossSalary <= 24999) {
            this.NHIF = 700
            return this.NHIF
        } else if (this.grossSalary >= 25000 && this.grossSalary <= 29999) {
            this.NHIF = 850
            return this.NHIF
        } else if (this.grossSalary >= 30000 && this.grossSalary <= 34999) {
            this.NHIF = 900
            return this.NHIF
        } else if (this.grossSalary >= 35000 && this.grossSalary <= 39999) {
            this.NHIF = 950
            return this.NHIF
        } else if (this.grossSalary >= 40000 && this.grossSalary <= 44999) {
            this.NHIF = 1000
            return this.NHIF
        } else if (this.grossSalary >= 45000 && this.grossSalary <= 49999) {
            this.NHIF = 1100
            return this.NHIF
        } else if (this.grossSalary >= 50000 && this.grossSalary <= 59999) {
            this.NHIF = 1200
            return this.NHIF
        } else if (this.grossSalary >= 60000 && this.grossSalary <= 69999) {
            this.NHIF = 1300
            return this.NHIF
        } else if (this.grossSalary >= 70000 && this.grossSalary <= 79999) {
            this.NHIF = 1400
            return this.NHIF
        } else if (this.grossSalary >= 80000 && this.grossSalary <= 89999) {
            this.NHIF = 1500
            return this.NHIF
        } else if (this.grossSalary >= 90000 && this.grossSalary <= 99999) {
            this.NHIF = 1600
            return this.NHIF
        } else {
            this.NHIF = 1700
            return this.NHIF
        }
     }

     computeCarryHomePay() {
         this.carryHomePay = this.taxableIncome - (this.NHIF + this.taxPayable)
         return this.carryHomePay

     }
    }


    let personofInterest_1 = new Individual(10000, 1200, 'John Wick');
    console.log("Employee ", personofInterest_1.empName, "Tax Computation's, are: ")

    console.log("Gross Salary: ", (personofInterest_1.computeGrossSalary()))
    console.log("Benefits: ", personofInterest_1.benefits)
    console.log("NHIF: ",(personofInterest_1.computeNHIF()))
    console.log("NSSF Deductible: ",(personofInterest_1.computeNSSFDeductible()))
    console.log("Post Pension Deduction Income: ",(personofInterest_1.computePostPensionDeductionIncome()))
    console.log("Taxable Income: ",(personofInterest_1.computeTaxableIncome()))
    console.log("Tax Deduction: ",(personofInterest_1.computeTaxDeduction()))
    console.log("Tax Payable: ",(personofInterest_1.computeTaxPayable()))
    console.log("Tax Relief: ", personofInterest_1.personalRelief)
    console.log("Carry Home Pay: ",(personofInterest_1.computeCarryHomePay()))