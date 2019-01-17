import React, {Component} from 'react';
import MaskedInput from "react-text-mask";

const FormStep2 = props => {
    const {
        isSubmitting,
        errors,
        handleChange,
        handleSubmit,
      } = props;
    return (
        <div>
            <label className="form-field" htmlFor="endereco">
                <span>Endereço:</span>
                <input
                name="endereco"
                type="text"
                onChange={handleChange}
                />
            </label>
            <label className="form-field" htmlFor="number">
                <span>Numero:</span>
                <input
                name="number"
                type="text"
                onChange={handleChange}
                />
            </label>
            <button type="submit" onClick={handleSubmit}>
                {isSubmitting ? 'Loading' : 'Next'}
            </button>
        </div>
    )
}

export default FormStep2;