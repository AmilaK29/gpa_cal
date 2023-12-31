export const calculate_sgpa = (subjects) => {
    let total_credits = 0;
    let total_markls = 0;

    for(let i = 0 ; i < subjects.length ; i++){
        total_credits += subjects[i].credits;
        total_markls += subjects[i].credits * subjects[i].grade;
    }
    console.log(total_markls);
    console.log(total_credits);

    return total_markls/total_credits;
}