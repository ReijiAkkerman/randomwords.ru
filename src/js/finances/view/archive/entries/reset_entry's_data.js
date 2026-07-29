// Этот класс сбрасывает параметры записи до значений по умолчанию.
// На данный момент значения по умолчанию жестко зафиксированы в этом файле.
// В последствии класс нужно будет переписать так, чтобы значения по умолчанию считывались из настроек.

class resetEntryData {
    #selectors = new Map([
        ["Категория", ".entries-entryForm-param-cath"],
        ["Тип", ".entries-entryForm-param-type"],
        ["Область пользователей", ".entries-entryForm .FormElements-usersBlock"],
        ["Сумма", ".entries-entryForm .FormElements-sumBlock_sum"],
        ["Валюта", ".entries-entryForm .FormElements-sumBlock_currency"],
        ["Особые отметки", ".entries-entryForm-param_specialMarks"],
        ["Описание", ".entries-entryForm-param_description"],
        ["", ""],
    ]);
}