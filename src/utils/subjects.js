export const format_subject_name = (subject_name) => {

    let subject_name_formatted = subject_name.toLowerCase();
    subject_name_formatted = subject_name_formatted.replace(/\s/g, "_");

    return subject_name_formatted;

};
