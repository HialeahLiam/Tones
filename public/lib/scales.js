// Valid note letters: A B C D E F G
// Valid note modifiers: bb b # x 
// Valid Note Strings: any valid note letter, modifier, or concatenation of single letter and single modifier.

const SEMITONES_IN_OCTAVE = 12

//keys represent degree in major scale. Values are distance from root in semitones
const MajorScaleDegreeSemitones = {
    2: 2,
    3: 4,
    4: 5,
    5: 7,
    6: 9,
    7: 11,
}

const WhiteKeys = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
}

const Notes = {
    A: 0,
    B: 2,
    C: 3,
    D: 5, 
    E: 7,
    F: 8,
    G: 10,
}

const Modifiers = {
    bb: -2,
    b: -1,
    '#': 1,
    x: 2,
}

// returns an array of strings representing notes of given root's major scale.
// root must be a valid Note String
function getMajorScale(root) {
    let scale = [root];
    for (let i=2; i<8; i++) {
        scale.push(getMajorScaleDegree(root, i));
    }
    return scale;
}

function printScale(scale) {
    let result = "";
    for (let i of scale) {
        result += (i + ' ');
    }
    console.log(result);
}

// // returns corresponding degree of major scale corresponding to given root as a VALID Note String.
// // root must be a valid Note String
function getMajorScaleDegree(root, degree) {
    const rootLetter = root[0];
    const degreeLetterValue = (+getWhiteKeyValueFromLetter(rootLetter) + degree - 1) % 7;
    const degreeLetter = WhiteKeys[degreeLetterValue]
    let degreeModifier = "";
    const semitoneDistance = getSemitoneDistance(root, degreeLetter);
    if (semitoneDistance == MajorScaleDegreeSemitones[degree]+1) degreeModifier = 'b';
    else if (semitoneDistance == MajorScaleDegreeSemitones[degree]+2) degreeModifier = 'bb';
    else if (semitoneDistance == MajorScaleDegreeSemitones[degree]-1) degreeModifier = '#';
    else if (semitoneDistance == MajorScaleDegreeSemitones[degree]-2) degreeModifier = 'x';
    return degreeLetter + degreeModifier;   
}

function getSemitoneDistance(firstNote, secondNote) {
    const firstValue = integerifyNote(firstNote);
    const secondValue = integerifyNote(secondNote);
    if ( secondValue >= firstValue ) {
        return secondValue-firstValue;
    }
    return (SEMITONES_IN_OCTAVE-firstValue) + secondValue;   
}

function getWhiteKeyValueFromLetter(letter) {
    for (let key in WhiteKeys) {
        if (WhiteKeys[key] == letter) return key;
    }
    return null;
}

// returns integer position on keyboard such that
// A = 0
// Bb = 1
// B = 2
//  ...
// Ab = 11
// assumes note is a VALID Note String
function integerifyNote(note) {
    let modifier = 0;
    if (note.length > 1) {
        modifier = Modifiers[note.substring(1)];
    } 
    return Notes[note[0]] + modifier;
}

printScale(getMajorScale('A'));
printScale(getMajorScale('B'));
printScale(getMajorScale('C'));
printScale(getMajorScale('D'));
printScale(getMajorScale('E'));
printScale(getMajorScale('F'));
printScale(getMajorScale('G'));
printScale(getMajorScale('Eb'))